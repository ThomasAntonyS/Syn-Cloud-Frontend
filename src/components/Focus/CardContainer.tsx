import Card from "./Card";

const focusAreas = [
  {
    title: "Automation",
    description:
      "Cloud infrastructure management by automating AWS services like EC2, S3, Lambda, and more. This reduces the manual effort and complexity in configuring, deploying, and maintaining cloud environments.",
  },
  {
    title: "Cost Optimization",
    description:
      "Helping businesses minimize cloud expenses by optimizing AWS resource usage, monitoring billing, and providing recommendations for cost-effective cloud operations. It enables better financial control over cloud investments.",
  },
  {
    title: "Scalability",
    description:
      "Providing scalable solutions to manage and adapt cloud resources dynamically as business needs grow or fluctuate. Whether dealing with traffic spikes or scaling down during quiet periods, Syncloud ensures seamless scalability.",
  },
  {
    title: "Security Compliance",
    description:
      "Prioritizing cloud security by automating the enforcement of security best practices, including compliance with industry standards like GDPR, HIPAA, or SOC 2. It continuously monitors for vulnerabilities and ensures data is safe.",
  },
  {
    title: "User-friendly Interface",
    description:
      "Offering a simple and intuitive dashboard that helps users manage cloud services without needing in-depth cloud expertise. This makes cloud management accessible to businesses of all sizes.",
  },
  {
    title: "Performance Optimization",
    description:
      "Continuously monitoring resource performance and providing optimization recommendations, ensuring that services run at peak efficiency. It analyzes bottlenecks, provides solutions, and maintains optimal performance levels for critical workloads.",
  },
];

// CardContainer component to display the cards in a responsive grid layout
const CardContainer = () => {
  return (
    <div className="mx-auto max-w-screen-xl grid grid-cols-1 gap-8 px-5 sm:grid-cols-2 lg:grid-cols-3 lg:px-20">
      {focusAreas.map((focusArea, index) => (
        <Card
          key={index}
          title={focusArea.title}
          description={focusArea.description}
        />
      ))}
    </div>
  );
};

export default CardContainer;
