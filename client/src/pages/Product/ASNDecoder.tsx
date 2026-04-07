import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Code2, Zap, Shield } from "lucide-react";
import Tool1 from "../../../public/asn/tool1.png";
import Tool2 from "../../../public/asn/tool2.png";
import Tool3 from "../../../public/asn/tool3.png";
import { useLocation } from "wouter";
import React, { useState } from "react";
import { Cpu, Bug, FileCode2, Feather, Library, Network, ShieldCheck, Activity, CheckCircle2 } from "lucide-react";


export default function ASNDecoder() {
  const [loading, setLoading] = useState(false);
  const protocolOptions: Record<string, string[]> = {
    "3G": ["hnbap-f50", "rua-f50", "ranap-f60"],
    "4G": ["s1ap-f50", "x2ap-f50", "m3ap-f50", "m2ap-f50"],
    "5G": ["f1ap-f60", "ngap-f50", "xnap-f40", "e1ap-f50"],
  };
  const [decodedMessage, setDecodedMessage] = useState<any>(null);
  const [domain, setDomain] = useState<string>("");
  const [protocol, setProtocol] = useState<string>("");
  const [buffer, setBuffer] = useState<string>("");
  // const handleSubmit = async () => {
  //   if (!protocol || !buffer) return;

  //   try {
  //     const response = await fetch(
  //       `https://ridenext.co.in/cgi-bin/asn_decode.php?protocol=${protocol}&buffer=${buffer}`
  //     );

  //     const data = await response.json();

  //     if (!data.error) {
  //       setDecodedMessage(data[0]);
  //     } else {
  //       console.error(data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  // const handleSubmit = async () => {
  //   if (!protocol || !buffer) return;

  //   setLoading(true);
  //   try {
  //     const response = await fetch(
  //       `https://ridenext.co.in/cgi-bin/asn_decode.php?protocol=${protocol}&buffer=${buffer}`
  //     );

  //     const data = await response.json();

  //     if (!data.error) {
  //       setDecodedMessage(data[0]);
  //     } else {
  //       console.error(data.error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // const handleSubmit = async () => {
  //   if (!protocol) {
  //     alert("Please select protocol");
  //     return;
  //   }

  //   if (!buffer) {
  //     alert("Please enter buffer");
  //     return;
  //   }

  //   setLoading(true);
  //   setDecodedMessage(null);

  //   try {
  //     const response = await fetch(
  //       `https://ridenext.co.in/cgi-bin/asn_decode.php?protocol=${protocol}&buffer=${buffer}`
  //     );

  //     const data = await response.json();

  //     console.log("Response:", data);

  //     if (data.result) {
  //       setDecodedMessage(data.result); // ✅ matches your HTML version
  //     } else {
  //       console.error("Invalid response");
  //       setDecodedMessage("Invalid response");
  //     }
  //   } catch (err) {
  //     console.error("Error:", err);
  //     setDecodedMessage("Error while decoding");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSubmit = async () => {
    if (!protocol || !buffer) {
      alert("Please select protocol and enter buffer");
      return;
    }

    try {
      const response = await fetch(
        `https://ridenext.co.in/cgi-bin/asn_decode.php?protocol=${protocol}&buffer=${buffer}`
      );

      const text = await response.text();
      const data = JSON.parse(text);

      console.log("API Data:", data);

      let finalResult;

      if (data.result) {
        // 🔥 IMPORTANT: parse again because it's a string
        finalResult = JSON.parse(data.result);
      } else if (Array.isArray(data)) {
        finalResult = data;
      } else {
        finalResult = data;
      }

      setDecodedMessage(finalResult);

    } catch (error) {
      console.error("Error:", error);
      setDecodedMessage("Error while decoding");
    }
  };
  const handleDomainChange = (value: string) => {
    setDomain(value);
    setProtocol("");
  };


  return (
    <div className="min-h-screen">
      <PageHeader
        title="Innovative Products, Scalable Services & Real-World  Impact."
        subtitle=""
      />
      <section className="bg-white py-10 bg-black-50">

        {/* Heading */}
        <div className="container prose-xl px-4 md:px-6">
          <h2 className="text-4xl text-center font-bold text-black-900 mb-6">
            ASN (Abstract Syntax Notation) Encoder Decoder
          </h2>
          <h3 className="text-3xl font-semibold bg-gray-400 text-center">Overview</h3>
          <p className="text-black-600 leading-relaxed mb-4">
            The ASN Encoder & Decoder by RideNext (often referred to simply as RideNext ASN Encoder & Decoder) is a
            free online tool designed to help engineers and developers decode ASN.1-encoded protocol messages commonly
            used in modern mobile communication networks such as 3G, 4G/LTE, and 5G.
          </p>
        </div>

        {/* Protocol Grid */}
        <div className="container px-4 md:px-6 mt-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* ASN Protocols */}
            <div className="h-full min-h-[240px] p-5 rounded-2xl shadow-md bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex flex-col">

              <h3 className="text-xl text-center font-bold mb-4">
                ASN Protocols
              </h3>

              {/* Protocols in 2 Columns */}
              <div className="grid grid-cols-3 gap-2 text-lg">
                {[
                  "RRC", "S1AP", "X2AP", "NGAP", "F1AP",
                  "E1AP", "E2AP", "E2SM", "XNAP",
                  "HNBAP", "RANAP", "RUA"
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white/20 px-3 py-2 rounded-lg text-center"
                  >
                    {item}
                  </div>
                ))}
              </div>

            </div>

            {/* NAS & GTP */}
            <div className="h-full min-h-[240px] p-5 rounded-2xl shadow-md bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex flex-col">
              <h3 className="text-xl text-center font-bold mb-4">Core Network Protocols</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/20 px-3 py-2 text-center text-lg rounded-lg">
                  NAS Protocol Encoders & Decoders
                </li>
                <li className="bg-white/20 px-3 py-2 text-center text-lg rounded-lg">
                  GTP Protocol Encoders & Decoders
                </li>
                <li className="bg-white/20 px-3 py-2 text-center text-lg rounded-lg">
                  gRPC
                </li>
              </ul>
            </div>

            {/* Telecom Nodes */}
            <div className="h-full min-h-[240px] p-5 rounded-2xl shadow-md bg-gradient-to-br from-purple-500 to-pink-600 text-white flex flex-col">
              <h3 className="text-xl text-center font-bold mb-4">Telecom Nodes</h3>
              <ul className="space-y-2 text-sm">
                <li className="bg-white/20 px-3 py-2 text-center text-lg rounded-lg">
                  eNB / gNB (CU-CP / CU-UP / DU)
                </li>
                <li className="bg-white/20 px-3 py-2 text-center text-lg rounded-lg">
                  AMF / MME
                </li>
                <li className="bg-white/20 px-3 py-2 text-center text-lg rounded-lg">
                  UPF / SGW / PGW
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Additional Content */}
        {/* <div className="container prose-xl px-4 md:px-6 mt-6">
          <p className="text-black-600 leading-relaxed">
            These above protocols are used to communicate between various Telecom Nodes such as
            eNBs/gNBs (CU-CP/CU-UP/DU), AMF/MME, and UPF/SGW/PGW.
          </p>
        </div> */}

        {/* What the ASN Encoder & Decoder Does */}

        <div className="container mx-auto px-4 md:px-6 py-12">

          {/* ROW 1 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT – CONTENT */}
            <div>
              <h4 className="text-3xl font-semibold  text-center">
                What the ASN Encoder & Decoder Does
              </h4>

              <p className="text-black-600 leading-relaxed text-lg mb-6">
                It decodes ASN.1 encoded messages (Protocol Data Units or PDUs) from mobile
                network protocols into human-readable structured formats like JSON without
                requiring the user to write or manage ASN.1 syntax files manually.
              </p>

              <p className="text-black-600 leading-relaxed mb-4 text-lg">
                It supports multiple network types (3G/UMTS, 4G/LTE, and 5G) and protocol interfaces including:
              </p>

              <ul className="grid grid-cols-2 gap-4 text-base font-medium mb-6">
                {["RRC", "S1AP", "X2AP", "M2AP", "M3AP", "E1AP"].map((item) => (
                  <li
                    key={item}
                    className="bg-gradient-to-r from-blue-50 to-indigo-50 
                 border border-blue-200 
                 text-blue-700 
                 px-4 py-3 
                 rounded-xl 
                 text-center 
                 shadow-sm 
                 hover:shadow-md 
                 hover:scale-[1.03] 
                 transition-all duration-200"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="text-black-600 text-lg leading-relaxed">
                These are standardized interfaces defined in 3GPP specifications.
                Simply provide the hex-encoded ASN.1 data and select the relevant
                network/protocol to obtain the decoded output in JSON format.
              </p>
            </div>

            {/* RIGHT – IMAGE 1 */}
            <div>
              <img
                src={Tool1}
                alt="ASN Encoding Example"
                className="rounded-2xl shadow-md w-full object-cover"
              />
            </div>

          </div>

          {/* ROW 2 – Remaining 2 Images */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            <img
              src={Tool2}
              alt="ASN Decoding JSON Output"
              className="rounded-2xl shadow-md w-full object-cover"
            />
            <img
              src={Tool3}
              alt="ASN Protocol Interface"
              className="rounded-2xl shadow-md w-full object-cover"
            />
          </div>

        </div>
      </section>
      {/* ---------ASN Decoder/Encoder Code-------------------- */}

      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <h2 className="text-4xl font-extrabold text-center mb-10 
                   bg-gradient-to-r from-blue-600 to-indigo-600 
                   text-transparent bg-clip-text">
            ASN Encoder & Decoder
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* LEFT PANEL */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-blue-500 flex flex-col">

              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Encoded ASN.1 Message
              </h3>

              {/* Dropdown Row */}
              <div className="grid grid-cols-2 gap-4 mb-5">

                {/* Domain */}
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">
                    Select Domain
                  </label>
                  <select
                    value={domain}
                    onChange={(e) => {
                      setDomain(e.target.value);
                      setProtocol(""); // reset protocol when domain changes
                    }}
                    className="w-full p-2.5 rounded-lg border border-blue-300 
             focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Choose Domain</option>
                    <option value="3G">3G / UMTS</option>
                    <option value="4G">4G / LTE</option>
                    <option value="5G">5G</option>
                  </select>
                </div>

                {/* Protocol */}
                <div>
                  <label className="block text-sm font-semibold text-slate-600 mb-1">
                    Select Protocol
                  </label>
                  <select
                    value={protocol}
                    onChange={(e) => setProtocol(e.target.value)}
                    disabled={!domain}
                    className={`w-full p-2.5 rounded-lg border 
             focus:ring-2 focus:outline-none
             ${domain
                        ? "border-blue-300 focus:ring-blue-500"
                        : "border-gray-300 bg-gray-100 cursor-not-allowed"}`}
                  >
                    <option value="">
                      {domain ? "Choose Protocol" : "Select Domain First"}
                    </option>

                    {domain &&
                      protocolOptions[domain]?.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Textarea */}
              <textarea
                value={buffer}
                onChange={(e) => setBuffer(e.target.value)}
                placeholder="Paste your HEX encoded ASN.1 message here..."
                className="flex-1 min-h-[250px] p-4 rounded-xl border border-blue-300 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 
                     resize-none font-mono text-sm"
              />

              {/* Button */}
              {/*<button
                onClick={handleSubmit}
                className="mt-6 bg-blue-600 hover:bg-blue-700 
                     text-white font-semibold py-2.5 rounded-xl 
                     transition duration-300"
              >
                Decode Message
              </button>*/}
              <button
                onClick={handleSubmit}
                className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-xl transition duration-300"
              >
                {loading ? "Decoding..." : "Decode Message"}
              </button>
            </div>

            {/* RIGHT PANEL */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-green-500 flex flex-col">

              <h3 className="text-2xl font-bold text-green-600 mb-6">
                Decoded Output (JSON)
              </h3>

              {/* <div className="flex-1 min-h-[330px] p-4 rounded-xl border border-green-300 
                        bg-slate-900 text-green-400 overflow-auto 
                        font-mono text-sm">
                {decodedMessage ? (
                  // <pre>{JSON.stringify(decodedMessage, null, 2)}</pre>
                  <pre>
                    {typeof decodedMessage === "object"
                      ? JSON.stringify(decodedMessage, null, 2)
                      : decodedMessage}
                  </pre>
                ) : (
                  <p className="text-slate-400">
                    Decoded JSON output will appear here...
                  </p>
                )}
              </div> */}
              <div className="flex justify-end gap-3 mb-3">

                {/* Copy Button */}
                <button
                  onClick={() => {
                    if (!decodedMessage) return;
                    navigator.clipboard.writeText(
                      JSON.stringify(decodedMessage, null, 2)
                    );
                    alert("Copied to clipboard!");
                  }}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded-lg shadow"
                >
                  Copy JSON
                </button>

                {/* Download Button */}
                <button
                  onClick={() => {
                    if (!decodedMessage) return;

                    const blob = new Blob(
                      [JSON.stringify(decodedMessage, null, 2)],
                      { type: "application/json" }
                    );

                    const url = URL.createObjectURL(blob);
                    const link = document.createElement("a");

                    link.href = url;
                    link.download = "decoded.json";
                    link.click();

                    URL.revokeObjectURL(url);
                  }}
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm rounded-lg shadow"
                >
                  Download JSON
                </button>

              </div>
              <div className="bg-slate-900 text-green-400 p-4 rounded-xl overflow-auto font-mono text-sm">
                {decodedMessage ? (
                  <pre>{JSON.stringify(decodedMessage, null, 2)}</pre>
                ) : (
                  <p className="text-slate-400">
                    Decoded JSON output will appear here...
                  </p>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
              Key Contributions
            </h2>
          </div>

          {/* ================= ROW 1 : WITH SUB-CONTENT ================= */}
          <div className="max-w-7xl mx-auto space-y-16">

            {/* ================= ROW 1 – WITH SUB CONTENT ================= */}
            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200">
                <Cpu className="w-10 h-10 text-indigo-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Simplifies Decoding Complex ASN.1 Messages
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  ASN.1 is a formal notation for structuring messages in telecom protocols.
                  Manually decoding requires understanding grammars and specialized compilers.
                </p>
                <p className="mt-4 text-lg text-indigo-600 font-medium">
                  Our tool removes the complexity by automating the decoding process.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200">
                <Bug className="w-10 h-10 text-emerald-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Helps Engineers Debug & Analyze Protocol Exchanges
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  In R&D, testing, network optimization, or troubleshooting, interpreting
                  raw encoded messages is crucial.
                </p>
                <p className="mt-4 text-lg text-emerald-600 font-medium">
                  Engineers can visualize message content instantly without coding ASN.1 decoders.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200">
                <FileCode2 className="w-10 h-10 text-purple-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  No ASN.1 Syntax Files Required
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Many ASN.1 decoders require loading and understanding specification files
                  (ASN.1 modules).
                </p>
                <p className="mt-4 text-lg text-purple-600 font-medium">
                  Our decoder works without users managing or understanding these definitions.
                </p>
              </div>

            </div>

            {/* ================= ROW 2 – WITHOUT SUB CONTENT ================= */}
            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200">
                <Feather className="w-10 h-10 text-cyan-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Lightweight Architecture
                </h3>
                <p className="text-lg text-slate-600">
                  RideNext encoders/decoders are light weight.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200">
                <Library className="w-10 h-10 text-amber-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Library Generation Ready
                </h3>
                <p className="text-lg text-slate-600">
                  Easily generate Python and C based libraries for integration.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200">
                <Network className="w-10 h-10 text-rose-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Multi-Generation Support
                </h3>
                <p className="text-lg text-slate-600">
                  Covers 3G, 4G, and 5G message types and interfaces.
                </p>
              </div>

            </div>

            {/* ================= ROW 3 – CONTINUED ================= */}
            <div className="grid md:grid-cols-3 gap-8">

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200">
                <ShieldCheck className="w-10 h-10 text-sky-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Accurate ASN.1 Structure Decoding
                </h3>
                <p className="text-lg text-slate-600">
                  Accurate decoding of complex ASN.1 structures.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200">
                <Activity className="w-10 h-10 text-lime-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Telecom Signaling Support
                </h3>
                <p className="text-lg text-slate-600">
                  Supports telecom signaling and protocol analysis.
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-slate-200">
                <CheckCircle2 className="w-10 h-10 text-pink-600 mb-5" />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">
                  Improved Testing & Validation
                </h3>
                <p className="text-lg text-slate-600">
                  Improves troubleshooting, validation, and interoperability testing.
                </p>
              </div>

            </div>

            {/* ================= BUSINESS VALUE ================= */}
            <div>
              <h2 className="text-3xl font-bold text-center text-slate-900 mb-10">
                Business Value
              </h2>

              <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-gradient-to-br from-indigo-600 to-blue-700 text-white rounded-2xl shadow-xl p-10 text-center">
                  <h3 className="text-xl font-semibold mb-3">Faster Debugging</h3>
                  <p className="text-lg opacity-90">
                    Accelerates issue resolution across telecom signaling layers.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white rounded-2xl shadow-xl p-10 text-center">
                  <h3 className="text-xl font-semibold mb-3">Reduced Development Time</h3>
                  <p className="text-lg opacity-90">
                    Minimizes integration and decoding implementation effort.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-600 to-fuchsia-700 text-white rounded-2xl shadow-xl p-10 text-center">
                  <h3 className="text-xl font-semibold mb-3">Improved Protocol Compliance</h3>
                  <p className="text-lg opacity-90">
                    Ensures standards-aligned decoding and validation workflows.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
