import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

type CourseDetailScreenProps = {
  course: {
    id: string;
    title: string;
    duration: string;
    students: string;
    description: string;
    topics: string[];
    price: string;
  };
  onBack: () => void;
};

const getIconForCourse = (id: string) => {
  switch (id) {
    case 'react':
      return <FontAwesome5 name="react" size={40} color={COLORS.white} />;
    case 'python':
      return <MaterialCommunityIcons name="language-python" size={44} color={COLORS.white} />;
    case 'aws':
      return <Ionicons name="cloud" size={40} color={COLORS.white} />;
    case 'cyber':
      return <MaterialCommunityIcons name="security" size={40} color={COLORS.white} />;
    case 'fullstack':
      return <Ionicons name="code-slash" size={40} color={COLORS.white} />;
    case 'mobile':
      return <Ionicons name="phone-portrait" size={40} color={COLORS.white} />;
    case 'devops':
      return <Ionicons name="server" size={40} color={COLORS.white} />;
    case 'ai':
      return <Ionicons name="bulb" size={40} color={COLORS.white} />;
    default:
      return <Ionicons name="book" size={40} color={COLORS.white} />;
  }
};

export const CourseDetailScreen = ({ course, onBack }: CourseDetailScreenProps) => {
  const handleEnroll = () => {
    Linking.openURL(`mailto:Muhammadwaleed3307@gmail.com?subject=Enrollment Request: ${course.title}&body=Hi, I am interested in enrolling for the ${course.title} course. Please share more details.`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backBtn} 
          onPress={onBack}
          accessibilityLabel="Go back"
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.white} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Course Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Course Icon & Title */}
        <View style={styles.courseHeader}>
          <View style={styles.iconContainer}>
            {getIconForCourse(course.id)}
          </View>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <View style={styles.certBadge}>
            <MaterialIcons name="verified" size={16} color={COLORS.gold} />
            <Text style={styles.certText}>Certified Program</Text>
          </View>
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Ionicons name="time-outline" size={20} color={COLORS.accentPurple} />
            <Text style={styles.statValue}>{course.duration}</Text>
            <Text style={styles.statLabel}>Duration</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="people-outline" size={20} color={COLORS.accentPurple} />
            <Text style={styles.statValue}>{course.students}</Text>
            <Text style={styles.statLabel}>Enrolled</Text>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About This Course</Text>
          <Text style={styles.description}>{course.description}</Text>
        </View>

        {/* Topics */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What You'll Learn</Text>
          {course.topics.map((topic, index) => (
            <View key={index} style={styles.topicItem}>
              <Ionicons name="checkmark-circle" size={20} color={COLORS.success} />
              <Text style={styles.topicText}>{topic}</Text>
            </View>
          ))}
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Course Features</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureItem}>
              <Ionicons name="videocam" size={24} color={COLORS.accentPurple} />
              <Text style={styles.featureText}>Live Classes</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="document-text" size={24} color={COLORS.accentPurple} />
              <Text style={styles.featureText}>Study Material</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="code-working" size={24} color={COLORS.accentPurple} />
              <Text style={styles.featureText}>Projects</Text>
            </View>
            <View style={styles.featureItem}>
              <Ionicons name="ribbon" size={24} color={COLORS.accentPurple} />
              <Text style={styles.featureText}>Certificate</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Enroll Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.enrollBtn} 
          onPress={handleEnroll}
          accessibilityLabel="Enroll Now"
        >
          <Ionicons name="school" size={20} color={COLORS.white} />
          <Text style={styles.enrollText}>Enroll Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  placeholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingBottom: 100,
  },
  courseHeader: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: COLORS.accentPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 12,
  },
  certBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: 'rgba(255,215,0,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  certText: {
    fontSize: 13,
    color: COLORS.gold,
    fontWeight: '600',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.primaryPurple,
    borderRadius: 12,
    padding: 14,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  topicText: {
    fontSize: 15,
    color: COLORS.white,
    flex: 1,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  featureItem: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 12,
  },
  featureText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 50,
    backgroundColor: COLORS.primaryDark,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  enrollBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: COLORS.accentPurple,
    paddingVertical: 16,
    borderRadius: 14,
  },
  enrollText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.white,
  },
});
