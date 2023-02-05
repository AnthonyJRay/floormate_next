export default function UserPage({ userID }) {
  console.log("User ID", userID);
  return <></>;
}

export async function getServerSideProps(context) {
  const { params } = context;
  return {
    props: {
      userID: params.userID,
    },
  };
}
