import {
  BarChart3,
  Clock,
  DollarSign,
  FileText,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Invoice Management",
    description:
      "Complete invoice system with financial transaction logging. Generate, track, and manage all sales invoices efficiently.",
  },
  {
    icon: Package,
    title: "Inventory Tracking",
    description:
      "Real-time inventory management with stock alerts. Track products, quantities, and automatic reorder notifications.",
  },
  {
    icon: Users,
    title: "Customer & Vendor Management",
    description:
      "Maintain complete customer and vendor records with transaction history, contact information, and payment status.",
  },
  {
    icon: BarChart3,
    title: "Real-time Dashboards",
    description:
      "Dynamic dashboards with sales analytics, revenue tracking, and performance metrics updated in real-time.",
  },
  {
    icon: DollarSign,
    title: "Payment Status Tracking",
    description:
      "Automated payment tracking system with status updates, payment reminders, and financial reconciliation.",
  },
  {
    icon: FileText,
    title: "Excel-like Data Entry",
    description:
      "Integrated Handontable for familiar spreadsheet-style data entry and manipulation with advanced features.",
  },
  {
    icon: TrendingUp,
    title: "Sales Analytics",
    description:
      "Comprehensive sales reports, trend analysis, and forecasting tools to help you make data-driven decisions.",
  },
  {
    icon: Clock,
    title: "Transaction History",
    description:
      "Complete audit trail of all transactions with timestamps, user tracking, and detailed financial logs.",
  },
];

export function ShopFlowFeatures() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything You Need to Manage Your Shop
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with modern technologies to provide a seamless shop management
            experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
