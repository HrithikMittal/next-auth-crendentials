"use client";

import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@/components/Profile";

const ProfilePage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`/api/users/${session?.user?.id}`);
      const data = await response.json();
      setData(data);
    };
    if (session?.user?.id) fetchProfile();
  }, [session?.user?.id]);

  const handleEdit = () => {
    console.log("edit clicked");
  };
  const handleDelete = () => {
    console.log("delete clicked");
  };

  <Profile
    name="My"
    desc="Welcome to your personalized profile page!"
    data={data}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />;
};

export default ProfilePage;
