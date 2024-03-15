// import { authOptions } from "@/lib/auth";
// import { getServerSession } from "next-auth";
// import UserList from "@/components/UserList";

// const AdminPage = ({ session }) => {
//   if (!session?.user) {
//     return <h2>Please log in to see this admin page</h2>;
//   }

//   return (
//     <div>
//       <h2 className="text-2xl">Admin page - welcome back {session.user.username}</h2>
//       <UserList />
//     </div>
//   );
// };

// export default AdminPage;

// export const getServerSideProps = async (context) => {
//   const session = await getServerSession(authOptions, context.req);

//   return {
//     props: {
//       session,
//     },
//   };
// };
