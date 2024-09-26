import GettingStarted from "../assets/icons/helpcentericons/Gettingstarted";
import ChoosingProviders from "../assets/icons/helpcentericons/Choosingproviders";
import ServiceDetail from "../assets/icons/helpcentericons/Servicedetails";
import ProviderInteraction from "../assets/icons/helpcentericons/ProviderInteraction";
import BookingServices from "../assets/icons/helpcentericons/BookingServices";
import PaymentsFees from "../assets/icons/helpcentericons/PaymentsFees";
import AccountProfile from "../assets/icons/helpcentericons/AccountProfile";
import TrustSafety from "../assets/icons/helpcentericons/TrustSafety";
import FindingHelp from "../assets/icons/helpcentericons/Findinghelp";

const HelpCenterData = [
  {
    id: 1,
    name: "Getting started",
    description:
      "Learn how easily sign up, explore, and find the right care for your loved ones ",
    Icon: GettingStarted,
  },
  {
    id: 2,
    name: "Finding help",
    description:
      "Discover how to search and filter services to match your specific needs",
    Icon: FindingHelp,
  },
  {
    id: 3,
    name: "Choosing providers",
    description:
      "Tips on selecting the right providers and viewing qualifications",
    Icon: ChoosingProviders,
  },
  {
    id: 4,
    name: "Service details",
    description:
      "Understand the services offered, such as specialized care, home mods, etc.",
    Icon: ServiceDetail,
  },
  {
    id: 5,
    name: "Provider interaction",
    description: "Learn how to contact service providers, and stay informed",
    Icon: ProviderInteraction,
  },
  {
    id: 6,
    name: "Booking service",
    description:
      "Find out how to easily request service and book service providers",
    Icon: BookingServices,
  },
  {
    id: 7,
    name: "Payments & fees",
    description: "Learn how to pay for services, understand membership",
    Icon: PaymentsFees,
  },
  {
    id: 8,
    name: "Account & profile",
    description: "Manage account settings, update profiles for loved ones ",
    Icon: AccountProfile,
  },
  {
    id: 9,
    name: "Trust & safety",
    description: "Learn about safety and quality of providers on the platform",
    Icon: TrustSafety,
  },
];

export default HelpCenterData;
