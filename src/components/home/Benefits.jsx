import { Clock, Leaf, Shield, Truck } from "lucide-react";

const BENEFITS = [
  {
    title: "Free Delivery",
    subtitle: "Orders over $20",
    Icon: Truck,
  },
  {
    title: "100% Organic",
    subtitle: "Certified products",
    Icon: Leaf,
  },
  {
    title: "Same Day",
    subtitle: "Express delivery",
    Icon: Clock,
  },
  {
    title: "Secure Pay",
    subtitle: "Safe checkout",
    Icon: Shield,
  },
];

const Benefits = () => {
  return (
    <section className="bg-background py-6 sm:py-8 lg:py-10 px-3 sm:px-4 lg:px-6">
      <div className="mx-auto bg-white w-full max-w-7xl border border-border rounded-xl sm:rounded-2xl shadow-sm sm:shadow-md px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8">
        <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ title, subtitle, Icon }) => (
            <li key={title} className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 text-center sm:text-left">
              <div className="flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-[#ff9800]/10 text-[#ff9800]">
                <Icon className="size-5 sm:size-6" aria-hidden="true" />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm sm:text-base font-semibold text-gray-900">{title}</p>
                <p className="text-xs sm:text-sm text-gray-600">{subtitle}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Benefits;
