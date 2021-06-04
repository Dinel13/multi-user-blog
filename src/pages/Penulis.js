import React from "react";
import { useParams } from "react-router-dom";

export default function Penulis() {
  const params = useParams();
  const [userData, setUserData] = React.useState(null);
  const id = params.id;

  React.useEffect(() => {
    const fetchToBackend = async () => {
      const getUserData = async () => {
        const respon = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/user/${id}`,
          { method: "GET" }
        );

        const data = await respon.json();
        if (!respon.ok) {
          throw new Error(data.message || "Tidak bisa meload penulis");
        }
        return data;
      };
      try {
        const data = await getUserData();
        console.log(data);
        setUserData(data.user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchToBackend();
  });

  return (
    <div>
      {userData && (
        <p>
          {userData.name}
          {userData.fakultas}
        </p>
      )}
    </div>
  );
}
