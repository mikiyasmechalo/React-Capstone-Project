"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa6";
import { z } from "zod";
import axios, { AxiosError } from "axios";

interface Destination {
  id: string;
  name: string;
  country: string;
  price: number;
  image: string;
  description: string;
}

const DestinationSkeleton = () => {
  return (
    Array.from({ length: 10 }).map((_, i) => (
      <div
        key={i}
        className={`animate-pulse relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
      >
        <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-6 bg-gray-200 rounded w-full mb-4"></div>
        <div className="mt-4 space-x-2 flex">
          <div className="h-8 bg-gray-200 rounded w-20"></div>
          <div className="h-8 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    ))
  );
};

const DestinationList = ({
  destinations,
  onEdit,
  onDelete,
  truncateDescription
}: {
  destinations: Destination[];
  onEdit: (destination: Destination) => void;
  onDelete: (id: string) => void;
  truncateDescription: (text: string, maxLength?: number) => string;
}) => {
  return (
    <>
      {destinations.map((item) => (
        <div
          key={item.id}
          className="p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col gap-2 justify-between items-start xs:w-80"
        >
          <div>
            <p>
              <span className="font-semibold">Name:</span> {item.name}
            </p>
            <p>
              <span className="font-semibold">Country:</span> {item.country}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {item.price}
            </p>
            <p>
              <span className="font-semibold">Image:</span> {item.image}
            </p>
            <p>
              <span className="font-semibold">Description:</span>{" "}
              {truncateDescription(item.description)}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full">
            <Button
              onClick={() => onEdit(item)}
              className="bg-yellow-500 text-white hover:bg-yellow-600 text-lg! p-2! px-6!"
              size="sm"
            >
              Edit
            </Button>
            <Button
              onClick={() => onDelete(item.id)}
              className="bg-red-500 text-white hover:bg-red-600  text-lg! p-2! px-4!"
              size="sm"
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </>
  );
};

// Zod schema for form validation
const destinationFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  price: z.number().positive("Price must be positive"),
  image: z.string().url({ message: "Invalid URL format" }),
  description: z.string().min(1, { message: "Description is required" }),
});

type DestinationFormValues = z.infer<typeof destinationFormSchema>;

const Page = () => {
  const [apiResponse, setApiResponse] = useState<Destination[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchType, setSearchType] = useState<"country" | "price">("country");
  const [editId, setEditId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<DestinationFormValues>({
    name: "",
    country: "",
    price: 0,
    image: "",
    description: "",
  });
  const [formErrors, setFormErrors] = useState<{
    name?: string;
    country?: string;
    price?: string;
    image?: string;
    description?: string;
  }>({});

  const fetchDestinations = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations"
      );
      const data: Destination[] = response.data.map((item: Destination) => ({
        ...item,
        price: Number(item.price) // Convert price to number during fetch
      }));
      setApiResponse(data);
    } catch (error: AxiosError | Error | any) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      }
       else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDestinations();
  }, [fetchDestinations]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue: string | number = value;

    if (name === "price") {
      newValue = value === "" ? 0 : Number(value);
    }

    setFormData({ ...formData, [name]: newValue });
    setFormErrors({ ...formErrors, [name]: undefined });
  };

  const validateForm = () => {
    const validationResult = destinationFormSchema.safeParse(formData);
    if (validationResult.success) {
      return true;
    } else {
      const errors: { [key: string]: string } = {};
      validationResult.error.issues.forEach((issue) => {
        if (issue.path[0]) {
          errors[issue.path[0]] = issue.message;
        }
      });
      setFormErrors(errors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (editId) {
        const response = await axios.put(
          `https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations/${editId}`,
          formData
        );

        const updatedDestination: Destination = {
          ...response.data,
          price: Number(response.data.price)
        };

        setApiResponse((prev) =>
          prev
            ? prev.map((dest) =>
                dest.id === response.data.id ? updatedDestination : dest
              )
            : [updatedDestination]
        );
        setEditId(null);
      } else {
        const response = await axios.post(
          "https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations",
          formData
        );
        const newDestination: Destination = {
          ...response.data,
          price: Number(response.data.price)
        };
        setApiResponse((prev) =>
          prev ? [...prev, newDestination] : [newDestination]
        );
      }

      setFormData({
        name: "",
        country: "",
        price: 0,
        image: "",
        description: "",
      });
      setShowForm(false);
    } catch (error: AxiosError | Error | any) {
      if (axios.isAxiosError(error)) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      }
       else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(
        `https://67eadc5834bcedd95f64c9f3.mockapi.io/RebelRover/Destinations/${id}`
      );
      setApiResponse((prev) => prev?.filter((dest) => dest.id !== id) || []);
    } catch (error: AxiosError | Error | any) {
       if (axios.isAxiosError(error)) {
        setError(error.message);
      } else if (error instanceof Error) {
        setError(error.message);
      }
       else {
        setError("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (destination: Destination) => {
    setFormData(destination);
    setEditId(destination.id);
    setShowForm(true);
  };

  const filteredDestinations = apiResponse
    ? apiResponse.filter((dest) => {
        const searchTermLower = searchTerm.toLowerCase();
        if (searchType === "country") {
          return dest.country.toLowerCase().includes(searchTermLower);
        } else if (searchType === "price") {
          return dest.price.toString().includes(searchTermLower);
        }
        return false;
      })
    : [];

  const truncateDescription = (text: string, maxLength = 100) => {
    if (!text) return "";
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <>
      <div className="md:min-h-screen bg-gray-100">
        <div className="responsive-image-height">
          <Image
            src="/blog-images/africa-heart.jpg"
            alt="Contact Background"
            layout="fill"
            className="object-center object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center flex flex-col items-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              Destinations
            </h1>
            <p className="text-lg md:text-2xl flex items-center gap-2">
              <Link
                href="/my"
                className="hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <FaChevronRight />
              <Link href="#" className="hover:text-gray-300 transition-colors">
                Destinations
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-4 flex flex-col gap-5">
        <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold mb-6 text-center text-gray-800">
          Destinations
        </h1>

        <Button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 hover:bg-blue-600 max-w-70"
          size="sm"
        >
          {showForm ? "Hide Form" : "Add Destination"}
        </Button>

        {showForm && (
          <div className="mb-8 shadow-lg rounded-md border bg-white">
            <div className="p-4">
              <h3 className="text-lg font-semibold">Destination Form</h3>
              <p className="text-sm text-gray-500">
                Fill the form below to add a new destination.
              </p>
            </div>
            <div className="p-4">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter destination name"
                    className="mt-1 border border-gray-250 rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300 px-3 py-2"
                  />
                  {formErrors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Enter country"
                    className="mt-1 border border-gray-250 rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300 px-3 py-2"
                  />
                  {formErrors.country && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.country}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter price"
                    className="mt-1 border border-gray-250 rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300 px-3 py-2"
                  />
                  {formErrors.price && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.price}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="Enter image URL"
                    className="mt-1 border border-gray-250 rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300 px-3 py-2"
                  />
                  {formErrors.image && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.image}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter description"
                    className="mt-1 border border-gray-250 rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300 px-3 py-2"
                  />
                  {formErrors.description && (
                    <p className="text-red-500 text-sm mt-1">
                      {formErrors.description}
                    </p>
                  )}
                </div>
                <button type="submit" disabled={loading}>
                  <Button>
                    {loading ? "Loading..." : editId ? "Update" : "Submit"}
                  </Button>
                </button>
              </form>
            </div>
          </div>
        )}
        <div className="mb-4 flex gap-4 flex-col sm:flex-row items-start sm:items-center">
          <div className="flex gap-2 items-center">
            <span className="text-gray-700 font-medium text-nowrap">
              Search by:
            </span>
            <select
              value={searchType}
              onChange={(e) =>
                setSearchType(e.target.value as "country" | "price")
              }
              className="border border-gray-250 rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300 px-3 py-2"
            >
              <option value="country">Country</option>
              <option value="price">Price</option>
            </select>
          </div>

          <input
            type="text"
            placeholder={`Search by ${searchType}...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-250 rounded-[10px] w-full focus:ring focus:ring-blue-200 focus:border-blue-300 px-3 py-2 flex-1"
          />
        </div>

        {error && (
          <div className="p-4 rounded-md bg-red-100 text-red-800 border border-red-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-red-500 inline-block mr-2"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <h4 className="text-lg font-semibold inline-block">Error</h4>
            <p className="text-sm">{error}</p>
          </div>
        )}

        {/* Display Destinations */}
        <div className="shadow-lg rounded-md border bg-white flex justify-center flex-col items-center">
          <div className="p-4 ">
            <h3 className="text-lg font-semibold text-center">
              All Destinations
            </h3>
            <p className="text-sm text-gray-500 text-center">
              All Destinations from the API is shown below.
            </p>
          </div>
          <div className="p-4 flex flex-wrap justify-center gap-4">
            {loading ? (
              Array.from({ length: 10 }).map((_, i) => (
                <DestinationSkeleton key={i} />
              ))
            ) : filteredDestinations.length > 0 ? (
              <DestinationList
                destinations={filteredDestinations.reverse()}
                onEdit={handleEdit}
                onDelete={handleDelete}
                truncateDescription={truncateDescription}
              />
            ) : (
              <div>No matching destinations found.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
