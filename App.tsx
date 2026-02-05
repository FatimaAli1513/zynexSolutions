import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HomeScreen } from './src/screens/HomeScreen';
import { ServicesScreen } from './src/screens/ServicesScreen';
import { CourseDetailScreen } from './src/screens/CourseDetailScreen';
import { ServiceDetailScreen } from './src/screens/ServiceDetailScreen';
import { COLORS } from './src/constants/colors';

type TabName = 'home' | 'services';
type ScreenName = 'tabs' | 'courseDetail' | 'serviceDetail';

// Course Data
const COURSES_DATA = {
  react: {
    id: 'react',
    title: 'React & React Native',
    duration: '12 Weeks',
    students: '120+',
    price: 'PKR 45,000',
    description: 'Master modern web and mobile app development with React and React Native. Build real-world applications using the most popular JavaScript framework.',
    topics: [
      'React Fundamentals & Hooks',
      'State Management (Redux, Context)',
      'React Native for Mobile Apps',
      'Navigation & Routing',
      'API Integration & REST',
      'Authentication & Security',
      'Deployment & Publishing',
    ],
  },
  python: {
    id: 'python',
    title: 'Python & Data Science',
    duration: '16 Weeks',
    students: '200+',
    price: 'PKR 55,000',
    description: 'Learn Python programming from scratch and dive deep into Data Science, Machine Learning, and Data Analysis with real-world projects.',
    topics: [
      'Python Fundamentals',
      'Data Structures & Algorithms',
      'NumPy & Pandas',
      'Data Visualization (Matplotlib, Seaborn)',
      'Machine Learning Basics',
      'SQL & Database Integration',
      'Real-world Projects',
    ],
  },
  aws: {
    id: 'aws',
    title: 'AWS Cloud Computing',
    duration: '10 Weeks',
    students: '80+',
    price: 'PKR 50,000',
    description: 'Become an AWS certified professional. Learn cloud architecture, deployment, and management of scalable applications on Amazon Web Services.',
    topics: [
      'AWS Core Services (EC2, S3, RDS)',
      'Serverless with Lambda',
      'Networking & VPC',
      'Security & IAM',
      'DevOps & CI/CD',
      'Cost Optimization',
      'AWS Certification Prep',
    ],
  },
  fullstack: {
    id: 'fullstack',
    title: 'Full Stack Web Development',
    duration: '16 Weeks',
    students: '150+',
    price: 'PKR 60,000',
    description: 'Become a complete web developer. Learn frontend, backend, databases, and deployment to build production-ready web applications.',
    topics: [
      'HTML, CSS & JavaScript',
      'React.js Frontend',
      'Node.js & Express Backend',
      'MongoDB & PostgreSQL',
      'REST API Development',
      'Authentication & Authorization',
      'Cloud Deployment',
    ],
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile App Development',
    duration: '14 Weeks',
    students: '90+',
    price: 'PKR 50,000',
    description: 'Build native iOS and Android apps using React Native. Learn to create beautiful, performant mobile applications from scratch.',
    topics: [
      'React Native Fundamentals',
      'Native Components & Styling',
      'Navigation & State',
      'Device APIs (Camera, Location)',
      'Push Notifications',
      'App Store Publishing',
      'Performance Optimization',
    ],
  },
  devops: {
    id: 'devops',
    title: 'DevOps & CI/CD',
    duration: '12 Weeks',
    students: '60+',
    price: 'PKR 55,000',
    description: 'Master DevOps practices and tools. Learn to automate deployments, manage infrastructure, and build reliable CI/CD pipelines.',
    topics: [
      'Linux & Shell Scripting',
      'Docker & Containerization',
      'Kubernetes Orchestration',
      'Jenkins & GitHub Actions',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Security Best Practices',
    ],
  },
  ai: {
    id: 'ai',
    title: 'AI & Machine Learning',
    duration: '16 Weeks',
    students: '70+',
    price: 'PKR 65,000',
    description: 'Dive into the world of Artificial Intelligence. Learn machine learning algorithms, deep learning, and build intelligent applications.',
    topics: [
      'Machine Learning Fundamentals',
      'Supervised & Unsupervised Learning',
      'Neural Networks & Deep Learning',
      'TensorFlow & PyTorch',
      'Natural Language Processing',
      'Computer Vision',
      'AI Project Development',
    ],
  },
};

// Services Data
const SERVICES_DATA = {
  web: {
    id: 'web',
    title: 'Web Development',
    description: 'We create modern, responsive, and high-performance websites and web applications tailored to your business needs. From simple landing pages to complex enterprise solutions.',
    features: [
      'Custom Website Development',
      'E-commerce Solutions',
      'Web Application Development',
      'CMS Development (WordPress, etc.)',
      'Progressive Web Apps (PWA)',
      'Website Maintenance & Support',
    ],
    benefits: [
      'Modern & Responsive Design',
      'SEO Optimized',
      'Fast Loading Speed',
      'Secure & Scalable',
      '24/7 Support Available',
    ],
  },
  mobile: {
    id: 'mobile',
    title: 'Mobile App Development',
    description: 'Build powerful native and cross-platform mobile applications for iOS and Android. We deliver apps that users love and businesses rely on.',
    features: [
      'iOS App Development',
      'Android App Development',
      'Cross-Platform (React Native)',
      'App UI/UX Design',
      'App Testing & QA',
      'App Store Publishing',
    ],
    benefits: [
      'Native Performance',
      'Beautiful User Interface',
      'Offline Functionality',
      'Push Notifications',
      'Analytics Integration',
    ],
  },
  cloud: {
    id: 'cloud',
    title: 'Cloud Solutions',
    description: 'Leverage the power of cloud computing with our expert cloud services. We help you migrate, manage, and optimize your cloud infrastructure.',
    features: [
      'Cloud Migration Services',
      'AWS, Azure & GCP Setup',
      'Serverless Architecture',
      'Cloud Security',
      'Cost Optimization',
      '24/7 Monitoring',
    ],
    benefits: [
      'Scalable Infrastructure',
      'Reduced IT Costs',
      'High Availability',
      'Disaster Recovery',
      'Global Reach',
    ],
  },
  consulting: {
    id: 'consulting',
    title: 'IT Consulting',
    description: 'Get expert guidance on technology strategy, digital transformation, and IT solutions. We help businesses make informed technology decisions.',
    features: [
      'Technology Assessment',
      'Digital Transformation',
      'IT Strategy Planning',
      'System Architecture Design',
      'Vendor Selection',
      'Project Management',
    ],
    benefits: [
      'Expert Guidance',
      'Cost Savings',
      'Risk Mitigation',
      'Competitive Advantage',
      'Future-Ready Solutions',
    ],
  },
};

export default function App() {
  const [activeTab, setActiveTab] = useState<TabName>('home');
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('tabs');
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleCoursePress = (courseId: string) => {
    setSelectedCourse(courseId);
    setCurrentScreen('courseDetail');
  };

  const handleServicePress = (serviceId: string) => {
    setSelectedService(serviceId);
    setCurrentScreen('serviceDetail');
  };

  const handleBack = () => {
    setCurrentScreen('tabs');
    setSelectedCourse(null);
    setSelectedService(null);
  };

  // Show Course Detail Screen
  if (currentScreen === 'courseDetail' && selectedCourse) {
    const course = COURSES_DATA[selectedCourse as keyof typeof COURSES_DATA];
    if (course) {
      return (
        <>
          <StatusBar style="light" />
          <CourseDetailScreen course={course} onBack={handleBack} />
        </>
      );
    }
  }

  // Show Service Detail Screen
  if (currentScreen === 'serviceDetail' && selectedService) {
    const service = SERVICES_DATA[selectedService as keyof typeof SERVICES_DATA];
    if (service) {
      return (
        <>
          <StatusBar style="light" />
          <ServiceDetailScreen service={service} onBack={handleBack} />
        </>
      );
    }
  }

  // Show Tab Screens
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Screen Content */}
      <View style={styles.content}>
        {activeTab === 'home' && (
          <HomeScreen onCoursePress={handleCoursePress} />
        )}
        {activeTab === 'services' && (
          <ServicesScreen onServicePress={handleServicePress} />
        )}
      </View>

      {/* Custom Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('home')}
          accessibilityRole="button"
          accessibilityLabel="Home"
        >
          <Ionicons 
            name={activeTab === 'home' ? 'home' : 'home-outline'} 
            size={24} 
            color={activeTab === 'home' ? COLORS.accentPurple : COLORS.textSecondary} 
          />
          <Text style={[
            styles.tabLabel, 
            activeTab === 'home' && styles.tabLabelActive
          ]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('services')}
          accessibilityRole="button"
          accessibilityLabel="Services"
        >
          <Ionicons 
            name={activeTab === 'services' ? 'briefcase' : 'briefcase-outline'} 
            size={24} 
            color={activeTab === 'services' ? COLORS.accentPurple : COLORS.textSecondary} 
          />
          <Text style={[
            styles.tabLabel, 
            activeTab === 'services' && styles.tabLabelActive
          ]}>
            Services
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: COLORS.primaryDark,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
    paddingBottom: 34,
    paddingTop: 12,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    color: COLORS.textSecondary,
  },
  tabLabelActive: {
    color: COLORS.accentPurple,
  },
});
