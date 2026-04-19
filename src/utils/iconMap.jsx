import {
  FaBolt, FaSolarPanel, FaMicrochip, FaRobot,
  FaGraduationCap, FaUniversity, FaTrophy, FaMedal,
  FaBriefcase, FaChalkboardTeacher, FaUserTie,
  FaBook, FaFileAlt, FaLightbulb, FaMicrophone, FaUsers,
  FaStar, FaAward,
} from 'react-icons/fa';
import { HiAcademicCap, HiLightningBolt, HiChip, HiCube, HiSparkles } from 'react-icons/hi';

const icons = {
  // About
  bolt: FaBolt,
  solar: FaSolarPanel,
  microchip: FaMicrochip,
  robot: FaRobot,
  lightning: HiLightningBolt,
  chip: HiChip,
  cube: HiCube,
  // Education
  graduation: FaGraduationCap,
  university: FaUniversity,
  trophy: FaTrophy,
  medal: FaMedal,
  // Experience
  briefcase: FaBriefcase,
  chalkboard: FaChalkboardTeacher,
  userTie: FaUserTie,
  academicCap: HiAcademicCap,
  // Research
  book: FaBook,
  fileAlt: FaFileAlt,
  lightbulb: FaLightbulb,
  microphone: FaMicrophone,
  users: FaUsers,
  // Awards
  star: FaStar,
  award: FaAward,
  sparkles: HiSparkles,
};

export const getIcon = (name, props = {}) => {
  const IconComponent = icons[name] || FaStar;
  return <IconComponent {...props} />;
};

export default icons;
