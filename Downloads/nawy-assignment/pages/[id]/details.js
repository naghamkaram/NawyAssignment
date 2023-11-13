"use client";

import React from "react";
import { useEffect, useState } from "react";
import styles from "../../app/page.module.css";
const ApartmentDetails = (props) => {
  const { response } = props;
  console.log(response, "props");

  return (
    <>
      <h1>Apartment Details:</h1>
      <h3>Location : {response.location}</h3>
      <h3>Floor Number : {response.floorNumber}</h3>
      <h3> Size : {response.size}</h3>
      <h3>Is Immediate : {response.isImmediate ? "Yes" : "No"}</h3>
    </>
  );
};
export default ApartmentDetails;
export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(
    `http://localhost:8080/apartment/listApartmentDetails/${id}`
  );
  const response = await res.json();
  return { props: { response: response.result } };
}
