import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mic,
  Phone,
  User,
  Mail,
  Wand2,
  Globe2,
  BrainCircuit,
  Sparkles,
  Volume2,
  Settings,
  Check,
  Crown,
} from "lucide-react";
import { TypewriterHeading } from "./TypewriterHeading";
import { useSpring, animated } from "@react-spring/web";
// import { useDrag } from "react-use-gesture";

interface AIVoiceBuilderProps {
  onSubmit: (data: {
    phoneNumber: string;
    name: string;
    email: string;
    voiceType: string;
    language: string;
  }) => void;
}

export const AIVoiceBuilder: React.FC<AIVoiceBuilderProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    name: "",
    email: "",
    voiceType: "natural",
    language: "en-US",
  });

  const [isRecording, setIsRecording] = useState(false);
  const [voicePreview, setVoicePreview] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  // const [dragProps, setDragProps] = useSpring(() => ({ x: 0, y: 0 }));

  // const bindDrag = useDrag(({ down, movement: [mx, my] }) => {
  //   setDragProps({ x: down ? mx : 0, y: down ? my : 0, immediate: down });
  // });

  const voiceTypes = [
    { id: "natural", name: "Natural Voice", icon: Volume2 },
    { id: "professional", name: "Professional", icon: BrainCircuit },
    { id: "custom", name: "Custom Clone", icon: Wand2 },
  ];

  const languages = [
    { code: "en-US", name: "English (US)" },
    { code: "es-ES", name: "Spanish" },
    { code: "fr-FR", name: "French" },
    { code: "de-DE", name: "German" },
    { code: "it-IT", name: "Italian" },
    { code: "ja-JP", name: "Japanese" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    setTimeout(() => setIsRecording(false), 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stepVariants = {
    enter: { x: 50, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -50, opacity: 0 },
  };

  return (
    <motion.div
      className="bg-white/30 p-8 rounded-3xl max-w-2xl mx-auto border border-black/10 backdrop-blur-xl relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FDB813] via-[#FF9500] to-[#FDB813] opacity-50" />

      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-black">
            Try Our AI Voice Builder
          </h2>
          <TypewriterHeading
            sequences={[
              "Create natural voice responses",
              1000,
              "Clone your voice in minutes",
              1000,
              "Build multilingual voice flows",
              1000,
            ]}
            className="text-black/70 text-lg"
          />
        </motion.div>
      </div>

      <AnimatePresence mode="wait">
        <motion.form
          key={currentStep}
          onSubmit={handleSubmit}
          className="space-y-6"
          variants={stepVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
        >
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-4">
              <div {...bindDrag()}>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-white/50 rounded-lg pl-12 pr-4 py-3 text-black border border-black/10 focus:border-black placeholder-black/50 hover:bg-white/60 transition-colors"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="relative mt-4">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-white/50 rounded-lg pl-12 pr-4 py-3 text-black border border-black/10 focus:border-black placeholder-black/50 hover:bg-white/60 transition-colors"
                    placeholder="Your Name"
                  />
                </div>

                <div className="relative mt-4">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white/50 rounded-lg pl-12 pr-4 py-3 text-black border border-black/10 focus:border-black placeholder-black/50 hover:bg-white/60 transition-colors"
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Voice Selection */}
          {currentStep === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                {voiceTypes.map(({ id, name, icon: Icon }) => (
                  <motion.label
                    key={id}
                    className={`cursor-pointer ${
                      formData.voiceType === id
                        ? "bg-black text-white"
                        : "bg-white/50 text-black hover:bg-black/5"
                    } p-4 rounded-xl border border-black/10 transition-all hover:scale-105`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <input
                      type="radio"
                      name="voiceType"
                      value={id}
                      checked={formData.voiceType === id}
                      onChange={handleInputChange}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center gap-2">
                      <Icon className="w-6 h-6" />
                      <span className="text-sm font-medium">{name}</span>
                    </div>
                  </motion.label>
                ))}
              </div>

              <div className="relative">
                <Globe2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black/40 w-5 h-5" />
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleInputChange}
                  className="w-full bg-white/50 rounded-lg pl-12 pr-4 py-3 text-black border border-black/10 focus:border-black appearance-none hover:bg-white/60 transition-colors"
                >
                  {languages.map(({ code, name }) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>

              {formData.voiceType === "custom" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-black/5 p-4 rounded-xl"
                >
                  <button
                    type="button"
                    onClick={toggleRecording}
                    className={`w-full flex items-center justify-center gap-2 ${
                      isRecording ? "bg-red-500" : "bg-black"
                    } text-white py-3 rounded-lg font-bold hover:opacity-90 transition-colors relative overflow-hidden`}
                  >
                    <motion.div
                      animate={{
                        scale: isRecording ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      <Mic
                        className={`w-5 h-5 ${
                          isRecording ? "text-red-200" : ""
                        }`}
                      />
                    </motion.div>
                    {isRecording ? "Recording..." : "Record Your Voice"}

                    {isRecording && (
                      <motion.div
                        className="absolute inset-0 bg-red-400"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ repeat: Infinity, duration: 1 }}
                      />
                    )}
                  </button>
                  {isRecording && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-2 text-center text-sm text-black/60"
                    >
                      Please read the sample text...
                    </motion.div>
                  )}
                </motion.div>
              )}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4">
            {currentStep > 1 && (
              <motion.button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex-1 bg-black/10 text-black py-3 rounded-lg font-bold hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Back
              </motion.button>
            )}
            {currentStep < 2 ? (
              <motion.button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex-1 bg-black text-[#FDB813] py-3 rounded-lg font-bold hover:bg-black/80 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Next
              </motion.button>
            ) : (
              <motion.button
                type="submit"
                className="flex-1 bg-black text-[#FDB813] py-3 rounded-lg font-bold hover:bg-black/80 transition-colors flex items-center justify-center gap-2 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-5 h-5" />
                Create Voice
                <motion.div
                  className="absolute inset-0 bg-[#FDB813]"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear",
                  }}
                  style={{ opacity: 0.1 }}
                />
              </motion.button>
            )}
          </div>
        </motion.form>
      </AnimatePresence>

      {/* Features Grid */}
      <div className="grid grid-cols-2 gap-4 mt-8">
        <motion.div
          className="bg-black/5 p-4 rounded-xl hover:bg-black/10 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Settings className="w-5 h-5 text-black/70" />
            <span className="font-medium text-black">Customizable</span>
          </div>
          <p className="text-sm text-black/60">
            Fine-tune voice parameters for perfect results
          </p>
        </motion.div>
        <motion.div
          className="bg-black/5 p-4 rounded-xl hover:bg-black/10 transition-colors"
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <Crown className="w-5 h-5 text-black/70" />
            <span className="font-medium text-black">Premium Quality</span>
          </div>
          <p className="text-sm text-black/60">
            Studio-grade voice synthesis technology
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
