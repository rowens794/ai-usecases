import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

import Sidebar from "@/components/Sidebar";
import MobileSidebar from "@/components/MobileSidebar";
import Template from "@/components/Slides/template";
import ImageRecognition from "@/components/Slides/Image-Recognition";
import SpeechToText from "@/components/Slides/Speech-to-Text";
import MeetingNotes from "@/components/Slides/Transcription-Summaries";
import PDFSummary from "@/components/Slides/PDF-Summary";
import CodeGeneration from "@/components/Slides/Code-Generation";
import Planning from "@/components/Slides/Planning";
import OtherModalities from "@/components/Slides/Other-Modalities";
import DataExtraction from "@/components/Slides/Data-Extraction";

const navigation: {
  heading: string;
  items: { name: string; current: boolean; component: any }[];
}[] = [
  {
    heading: "Key Ideas",
    items: [
      {
        name: "Speech Transcription",
        current: false,
        component: SpeechToText,
      },
      {
        name: "Meeting Notes",
        current: false,
        component: MeetingNotes,
      },
      {
        name: "PDF Summarization",
        current: false,
        component: PDFSummary,
      },
      {
        name: "Image Recognition",
        current: false,
        component: ImageRecognition,
      },
      {
        name: "Code Generation",
        current: false,
        component: CodeGeneration,
      },
      {
        name: "Task Planning",
        current: false,
        component: Planning,
      },
      {
        name: "Progress in Other Modalities",
        current: false,
        component: OtherModalities,
      },
    ],
  },
  {
    heading: "Use Cases",
    items: [
      {
        name: "Data Extraction",
        current: true,
        component: DataExtraction,
      },
      {
        name: "Knowledge Retrieval",
        current: false,
        component: ImageRecognition,
      },
      {
        name: "Document Summarization",
        current: false,
        component: ImageRecognition,
      },
      {
        name: "Meeting Preperation",
        current: false,
        component: ImageRecognition,
      },
      {
        name: "Document Drafting",
        current: false,
        component: ImageRecognition,
      },
      {
        name: "Email Assistance",
        current: false,
        component: ImageRecognition,
      },
      {
        name: "Research Assistant",
        current: false,
        component: ImageRecognition,
      },
    ],
  },
  {
    heading: "Common Concerns",
    items: [
      {
        name: "Halucinations",
        current: true,
        component: ImageRecognition,
      },
      {
        name: "Data Security",
        current: false,
        component: ImageRecognition,
      },
      {
        name: "Skill Degradation",
        current: false,
        component: ImageRecognition,
      },
    ],
  },
];

export default function Index() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentNavigation, setCurrentNavigation] = useState(
    "Speech Transcription"
  );
  const [currentHeading, setCurrentHeading] = useState("Key Ideas");

  function extractHeadingIndex(
    data: typeof navigation,
    currentHeading: string
  ): number {
    let headings = data.map((section) => section.heading);
    return headings.indexOf(currentHeading);
  }

  function extractItemNameIndex(
    navigation: any,
    sectionHeading: string,
    headingIndex: number
  ): number {
    const section = navigation[headingIndex];
    const sections = section ? section.items.map((item: any) => item.name) : [];
    return sections.indexOf(sectionHeading);
  }

  const headingIndex = extractHeadingIndex(navigation, currentHeading);
  const itemIndex = extractItemNameIndex(
    navigation,
    currentNavigation,
    headingIndex
  );

  //@ts-ignore
  const Component = navigation[headingIndex].items[itemIndex].component;

  return (
    <>
      <div className="">
        {/* Mobile sidebar */}
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          navigation={navigation}
          currentNavigation={currentNavigation}
          setCurrentNavigation={setCurrentNavigation}
          setCurrentHeading={setCurrentHeading}
        />

        {/* Static sidebar for desktop */}
        <Sidebar
          navigation={navigation}
          currentNavigation={currentNavigation}
          setCurrentNavigation={setCurrentNavigation}
          setCurrentHeading={setCurrentHeading}
        />

        <div className="lg:pl-72 h-screen overflow-hidden">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8 lg:hidden">
            <button
              type="button"
              className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <main className="h-full w-full ">
            <>
              <Component />
            </>
          </main>
        </div>
      </div>
    </>
  );
}
