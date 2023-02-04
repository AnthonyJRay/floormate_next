export default function Logout() {
  return (
    <>
      <p>You have been logged out successfully.</p>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {},
    redirect: {
      destination: "/",
    },
  };
}
