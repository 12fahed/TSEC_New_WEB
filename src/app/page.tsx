"use client";
import { ModeToggle } from "@/components/modeToggle";
import Login from "../pages/Login";
import Image from "next/image";
import { UserContext } from "./layout";
import DevsDark from "../public/images/devs-dark.png";
import DevsLight from "../public/images/devs-light.png";
import { useEffect } from "react";
import React from "react";
import { useTheme } from "next-themes";
import { Payment, columns } from "../../src/components/columnDef";
import { DataTable } from "../../src/components/dataTable";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import UpdatePassDetails from "@/pages/UpdatePassDetails";
import RailwayEntryInterface from "@/components/RailwayEntryInterface";

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.

  return [
    {
      certificateNumber: "CSDSDF3e423",
      name: "Jash",
      gender: "M",
      dob: "22/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address: "ABCD Bld, Flat 007, Goregaon East",
      status: "Pending",
    },
    {
      certificateNumber: "CSDSasd423",
      name: "NIEANDER",
      gender: "M",
      dob: "22/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address:
        "ABCD Bld, Flat 007, Goregaon EastABCD Bld, Flat 007, Goregaon EastABCD Bld, Flat 007, Goregaon East",
      status: "Confirmed",
    },
    {
      certificateNumber: "CSDasere3F3e423",
      name: "Jash",
      gender: "M",
      dob: "22/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address: "ABCD Bld, Flat 007, Goregaon East",
      status: "Confirmed",
    },
    {
      certificateNumber: "23432jnasdn",
      name: "Jash",
      gender: "M",
      dob: "22/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address: "ABCD Bld, Flat 007, Goregaon East",
      status: "Confirmed",
    },
    {
      certificateNumber: "1234asda",
      name: "Jash",
      gender: "M",
      dob: "22/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address: "ABCD Bld, Flat 007, Goregaon East",
      status: "Pending",
    },
    {
      certificateNumber: "12eads23d",
      name: "Jash",
      gender: "M",
      dob: "22/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address: "ABCD Bld, Flat 007, Goregaon East",
      status: "Pending",
    },
    {
      certificateNumber: "12eads23d",
      name: "Jash",
      gender: "M",
      dob: "22/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address: "ABCD Bld, Flat 007, Goregaon East",
      status: "Rejected",
    },
    {
      certificateNumber: "12eads23d",
      name: "Jash",
      gender: "M",
      dob: "29/07/2005",
      from: "Goregaon",
      to: "Bandra",
      class: 1,
      mode: "Quarterly",
      dateOfIssue: "25/06/2024",
      address: "ABCD Bld, Flat 007, Goregaon East",
      status: "Rejected",
    },
  ];
}

export default function Home() {
  const { loggedIn, setLoggedIn, user, setUser } =
    React.useContext(UserContext);

  const { theme } = useTheme();

  const [data, setData] = useState<Payment[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getData();
      setData(result);
    }
    fetchData();
  }, []);

  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  return (
    <>
      {" "}
      <div className="p-8">
        <div className="text-white">{session?.data?.user?.email}</div>
        <button className="text-white" onClick={() => signOut()}>
          Logout
        </button>
      </div>
      <div className="w-[100%] h-[100%] flex flex-col">
        <div className="h-[10%] flex items-center justify-between">
          <div className="ml-5">
            <Image src={theme == "dark" ? DevsDark : DevsLight} alt="logo" />
          </div>
          <div className=" mr-5">
            <ModeToggle />
          </div>
        </div>
        <div className="h-[90%] flex items-center justify-center">
          {/* <RailwayEntryInterface /> */}

          <div className="w-[70%] overflow-x-auto">
            <DataTable data={data} columns={columns} />
          </div>
          <UpdatePassDetails />
          {/* <div className="w-[70%] overflow-x-auto">
            <DataTable data={data} columns={columns} />
          </div> */}
          {/* <Login
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
            setUser={setUser}
          /> */}
        </div>
      </div>
    </>
  );
}

Home.requireAuth = true;
