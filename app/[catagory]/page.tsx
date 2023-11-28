interface PageProps {
  params: {
    catagory: string;
  };
}

export default function page({ params: { catagory } }: PageProps) {
  return <div>{catagory}</div>;
}
