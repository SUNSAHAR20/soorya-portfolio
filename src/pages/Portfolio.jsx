import { useState } from "react";
import { Card } from "../components/Card";
import { Mail, Linkedin } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
        {/* Navbar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Soorya Sahar</h1>
          <button onClick={() => setDarkMode(!darkMode)} className="border px-4 py-2 rounded">
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Engineer by Craft, Innovator by Passion</h2>
          <p className="text-lg">Building Solutions with Purpose and Precision.</p>
        </section>

        {/* About Me */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">About Me</h3>
          <p>
            I'm a technology enthusiast passionate about building scalable, meaningful solutions.
            With hands-on experience across software development, automation testing, and DevOps practices,
            I enjoy bridging the gap between ideas and impactful execution.
          </p>
        </section>

        {/* Experience */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="grid gap-4">
            <Card>
              <h4 className="font-bold">Technical Support Specialist – Xplore Inc.</h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Advanced troubleshooting for 4G, 5G, Fibre technologies.</li>
                <li>Supported business and residential clients.</li>
                <li>Documented best practices for technical teams.</li>
              </ul>
            </Card>
            <Card>
              <h4 className="font-bold">Junior SDET – Sonrai Security</h4>
              <ul className="list-disc ml-5 mt-2">
                <li>Developed automated test suites for CI/CD pipelines.</li>
                <li>Maintained testing standards in agile environments.</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-2 gap-4">
            <Card>DevOps & CI/CD</Card>
            <Card>Automation Testing</Card>
            <Card>Cloud Platforms</Card>
            <Card>Terraform & Kubernetes</Card>
            <Card>API Integration</Card>
            <Card>Python, JavaScript, Java</Card>
            <Card>Problem-Solving</Card>
            <Card>Effective Communication</Card>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h3 className="text-2xl font-semibold mb-4">Contact</h3>
          <div className="flex items-center gap-4">
            <a href="mailto:your@email.com" className="border rounded p-2 flex items-center gap-2">
              <Mail className="h-4 w-4" /> Email Me
            </a>
            <a href="https://www.linkedin.com/in/your-linkedin/" target="_blank" rel="noopener noreferrer" className="border rounded p-2 flex items-center gap-2">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}