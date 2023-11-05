import { toast } from "react-toastify";
import { ComplexPagination, SectionTitle, OrdersList } from "../components";
import { redirect } from "react-router-dom";
import { customAxios } from "../utils";

const ordersQuery = (params, user) => {
  return {
    queryKey: ["orders", user.id, params.page ? parseInt(params.page) : 1],
    queryFn: () =>
      customAxios.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};
export const loader =
  (store, queryClient) =>
    async ({ request }) => {
      const user = store.getState().user.user;
      if (!user) {
        toast.warn("You need to be logged in");
        return redirect("/");
      }
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ]);

      try {
        const response = await queryClient.ensureQueryData(
          ordersQuery(params, user),
        );
        return { orders: response.data.data, meta: response.data.meta };
      } catch (error) {
        const errorResponse =
          error?.response?.data?.error?.message ||
          "Some error occured, try again later";
        toast.error(errorResponse);
        return null;
      }
    };
const Orders = () => {
  return (
    <div>
      <SectionTitle text="Your Orders" />
      <OrdersList />
      <ComplexPagination />
    </div>
  );
};

export default Orders;
