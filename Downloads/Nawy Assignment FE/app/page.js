"use client"; // This is a client component
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [apartmentsData, setapartmentsData] = useState([]);
  const listApartmentsAPI = async () => {
    const data = await fetch("http://localhost:8080/apartment/listApartments");
    data.json().then((res) => {
      setapartmentsData(res.result);
    });
  };
  useEffect(() => {
    listApartmentsAPI();
  }, []);
  useEffect(() => {
    console.log(apartmentsData);
  }, [apartmentsData]);
  return (
    <div className={styles.container}>
      <h1>Nawy Assignment App</h1>
      <div className={styles.tableContainer}>
        <table className={styles.tableStyle} border="1">
          <tbody>
            <tr>
              <th>Unit Id</th>
              <th>Location</th>
            </tr>
          </tbody>
          <tbody>
            {apartmentsData.map((value, index) => {
              return (
                <tr key={value["_id"]}>
                  <td>
                    <Link
                      className={styles.IdButton}
                      href="/[id]/details"
                      as={`/${value["_id"]}/details`}
                    >
                      {value["_id"]}
                    </Link>
                  </td>
                  <td>{value["location"]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
