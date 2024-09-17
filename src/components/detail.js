import { useParams } from "react-router-dom";
export default function Detail() {
 const params = useParams();
 return (
   <div>
     <h1>I am {params.mascotaId}</h1>
   </div>
 );
}