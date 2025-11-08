import React from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';

function InfoCard({ title, children }) {
  return (
    <div className="p-5 rounded-lg border border-gray-200 bg-white shadow-sm">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <div className="text-sm text-gray-700">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <NavBar />
      <main className="flex-1">
        <Hero />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-6">
          <InfoCard title="Pages">
            <ul className="list-disc list-inside space-y-1">
              <li><a className="text-blue-600 hover:underline" href="/">Home</a></li>
              <li><a className="text-blue-600 hover:underline" href="/login">Login</a> · <a className="text-blue-600 hover:underline" href="/register">Register</a></li>
              <li><a className="text-blue-600 hover:underline" href="/dashboard">Dashboard</a></li>
              <li><a className="text-blue-600 hover:underline" href="/add-material">Add Material</a></li>
              <li><a className="text-blue-600 hover:underline" href="/reports">Reports</a></li>
              <li><a className="text-blue-600 hover:underline" href="/receipts">Receipts</a></li>
              <li><a className="text-blue-600 hover:underline" href="/thank-you">Thank You</a></li>
            </ul>
          </InfoCard>

          <InfoCard title="Departments">
            <p className="text-gray-600">Civil, Computer Science Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, Information Science Engineering, Mechanical Engineering, Artificial Intelligence & Machine Learning, FYC, Chemistry, Physics, Mathematics, Electric Maintenance, Civil Maintenance, Office, Library, Sports, Boys Hostel, Girls Hostel</p>
          </InfoCard>

          <InfoCard title="How it works">
            <ol className="list-decimal list-inside space-y-1">
              <li>Add a material with vendor details and receipt.</li>
              <li>Track and filter entries in the dashboard.</li>
              <li>Generate PDF reports or download all receipts as ZIP.</li>
            </ol>
          </InfoCard>
        </section>
      </main>
      <Footer />
    </div>
  );
}
