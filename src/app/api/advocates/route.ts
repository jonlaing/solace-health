import { advocateData } from "../../../db/seed/advocates";

export async function GET(request: Request) {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);

  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const page = searchParams.get("page");

  // filter advocates
  const filteredAdvocates = advocateData.filter((advocate) => {
    if (!query) return true;

    const hasMatchingSpecialties = advocate.specialties.some((specialty) =>
      specialty.includes(query)
    );

    return (
      advocate.firstName.includes(query) ||
      advocate.lastName.includes(query) ||
      advocate.city.includes(query) ||
      advocate.degree.includes(query) ||
      hasMatchingSpecialties ||
      advocate.yearsOfExperience === parseInt(query, 10)
    );
  });

  // Implement pagination
  const pageNumber = page ? parseInt(page, 10) : 0;
  const pageSize = 10;
  const startIndex = pageNumber * pageSize;
  const endIndex = startIndex + pageSize;

  return Response.json(filteredAdvocates.slice(startIndex, endIndex));
}
