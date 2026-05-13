'use client'
import React from 'react'
import { Card } from '@/components/ui/card'
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

const teamMembers = [
  {
    name: "ABHINAV RISHI",
    role: "FOUNDER\nCORE DEVELOPER",
    university: "ST. PETER'S ENGINEERING COLLEGE-HYDERABAD",
    color: "#FF4D00",
    image: "/team/Abhinav.png",
    position: "center 15%"
  },
  {
    name: "SAI SIDDARTHA",
    role: "CO FOUNDER\nBACKEND DEVELOPER",
    university: "AMRITA UNIVERSITY COIMBATORE",
    color: "#00E676",
    image: "/team/siddardha.png",
    position: "75% 10%" // Shift horizontally to center his face
  },
  {
    name: "SHLOK KARN",
    role: "CO FOUNDER\nCTO",
    university: "ST. PETER'S ENGINEERING COLLEGE-HYDERABAD",
    color: "#D500F9",
    image: "/team/shlok.jpeg",
    position: "center 10%"
  },
  {
    name: "SUHAS",
    role: "BACKEND DEVELOPER",
    university: "MANIPAL UNIVERSITY BANGLORE",
    color: "#2962FF",
    image: "/team/suhas.png",
    position: "center 10%"
  },
  {
    name: "C. TARAN TEJA",
    role: "CHEIF MARKETING OFFICER",
    university: "MAHINDRA UNIVERSITY - HYDERABAD",
    color: "#FF4D00",
    image: "/team/taran.jpeg",
    position: "center 15%"
  },
  {
    name: "SHABNAM NISHA",
    role: "MARKETING MANAGER",
    university: "ST. PETER'S ENGINEERING COLLEGE-HYDERABAD",
    color: "#00E676",
    image: "/team/Shabnam.jpeg",
    position: "center 85%" // Shift down significantly to show her face
  },
  {
    name: "SREESHITH",
    role: "PR EXECUTIVE",
    university: "AMRITA UNIVERSITY\nDRDO INTERN-BANGLORE",
    color: "#D500F9",
    image: "/team/sreeshith.png",
    position: "center 10%"
  },
  {
    name: "SHIVANI",
    role: "SURVEYOR",
    university: "ST. PETER'S ENGINEERING COLLEGE-HYDERABAD",
    color: "#2962FF",
    image: "/team/shivani.jpeg",
    position: "center 15%"
  }
]

const TeamMemberCard = ({ member, index, isVisible }: { member: typeof teamMembers[0] & { position: string }, index: number, isVisible: boolean }) => {
  const [imageSrc, setImageSrc] = React.useState(member.image);
  const [retryCount, setRetryCount] = React.useState(0);

  const handleImageError = () => {
    const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const currentPath = imageSrc;
    
    // Find if we are currently trying one of our extensions
    const currentExtIndex = extensions.findIndex(ext => currentPath.toLowerCase().endsWith(ext));
    
    if (currentExtIndex !== -1 && currentExtIndex < extensions.length - 1) {
      // Try next extension in the list
      const base = currentPath.substring(0, currentPath.lastIndexOf('.'));
      const nextExt = extensions[currentExtIndex + 1];
      setImageSrc(base + nextExt);
    } else {
      // If all extensions failed or it's already the placeholder, set to final fallback
      if (imageSrc !== "/placeholder-user.jpg") {
        setImageSrc("/placeholder-user.jpg");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center group w-full"
    >
      <div className="relative w-full h-[380px] mb-8">
        {/* Name Tag - Overlapping the top of the image */}
        <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 z-20 w-[90%] pointer-events-none">
          <div
            className="py-2.5 px-4 rounded-full text-center font-bold text-[12px] tracking-widest shadow-xl border border-white/20 backdrop-blur-md uppercase"
            style={{ backgroundColor: member.color }}
          >
            {member.name}
          </div>
        </div>

        <div className="w-full h-full rounded-xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 group-hover:border-white/30 bg-zinc-900/50">
          <img
            src={imageSrc}
            alt={member.name}
            className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
            style={{ objectPosition: member.position }}
            onError={handleImageError}
          />
        </div>
      </div>

      {/* Info Section - Consistent spacing */}
      <div className="text-center w-full px-2">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />
        
        <div className="min-h-[60px] flex flex-col justify-center mb-2">
          {member.role.split('\n').map((line, i) => (
            <p key={i} className="text-[13px] font-black tracking-[0.25em] uppercase leading-relaxed text-white">
              {line}
            </p>
          ))}
        </div>

        <div className="h-[1px] w-12 mx-auto bg-white/10 mb-3" />
        
        <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-[0.15em] leading-relaxed max-w-[220px] mx-auto min-h-[30px]">
          {member.university}
        </p>
      </div>
    </motion.div>
  );
};

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section className="py-24 md:py-32 bg-transparent text-white relative overflow-hidden" ref={ref}>
      {/* Visionix Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[20vw] font-black tracking-tighter">VISIONIX</h2>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter inline-flex flex-wrap justify-center gap-x-4 items-baseline">
            <span className="border-b-4 border-white pb-1">OUR TEAM</span>
            <span className="bg-[#2962FF] px-4 py-1 skew-x-[-12deg] italic">
              <span className="skew-x-[12deg] inline-block">ROLES</span>
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-x-8 md:gap-y-16">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              index={index} 
              isVisible={isVisible} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
