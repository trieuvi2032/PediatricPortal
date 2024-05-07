import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import ResourceForm from "@/components/shared/ResourceForm";

export default function AdminDashboard() {
  const { sessionClaims } = auth();

  // If the user does not have the admin role, redirect them to the home page

  return (
    <>
      <h1>This is the admin dashboard</h1>
      <p>This page is restricted to users with the 'admin' role.</p>
      <ResourceForm type="Create" />
    </>
  );
}