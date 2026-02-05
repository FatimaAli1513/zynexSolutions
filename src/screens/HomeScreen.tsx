import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { CourseCard } from '../components';

type HomeScreenProps = {
  onCoursePress: (courseId: string) => void;
};

export const HomeScreen = ({ onCoursePress }: HomeScreenProps) => {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={styles.logoIcon}>
            <MaterialCommunityIcons name="cpu-64-bit" size={32} color={COLORS.white} />
          </View>
          <View>
            <Text style={styles.logoText}>Zynex Solutions</Text>
            <Text style={styles.logoSubtext}>(Pvt) Ltd</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.notifBtn} accessibilityLabel="Notifications">
          <Ionicons name="notifications-outline" size={24} color={COLORS.white} />
          <View style={styles.notifDot} />
        </TouchableOpacity>
      </View>

      {/* Hero */}
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Professional IT Training</Text>
        <Text style={styles.heroSubtitle}>
          Certified programs aligned with current industry demands
        </Text>
        <View style={styles.chips}>
          <View style={styles.chip}>
            <MaterialIcons name="verified" size={16} color={COLORS.gold} />
            <Text style={styles.chipText}>Certified</Text>
          </View>
          <View style={styles.chip}>
            <Ionicons name="trending-up" size={16} color={COLORS.success} />
            <Text style={styles.chipText}>Industry Aligned</Text>
          </View>
        </View>
      </View>

      {/* Stats */}
      <View style={styles.statsBox}>
        <View style={styles.statItem}>
          <Text style={styles.statNum}>500+</Text>
          <Text style={styles.statLabel}>Students</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNum}>25+</Text>
          <Text style={styles.statLabel}>Courses</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNum}>95%</Text>
          <Text style={styles.statLabel}>Success</Text>
        </View>
      </View>

      {/* Courses */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>IT Training Programs</Text>
        <TouchableOpacity accessibilityLabel="View all">
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.coursesRow}
      >
        <CourseCard
          icon={<FontAwesome5 name="react" size={26} color={COLORS.white} />}
          title="React & React Native"
          duration="12 Weeks"
          students="120+"
          certified
          onPress={() => onCoursePress('react')}
        />
        <CourseCard
          icon={<MaterialCommunityIcons name="language-python" size={30} color={COLORS.white} />}
          title="Python & Data Science"
          duration="16 Weeks"
          students="200+"
          certified
          onPress={() => onCoursePress('python')}
        />
        <CourseCard
          icon={<Ionicons name="cloud" size={26} color={COLORS.white} />}
          title="AWS Cloud Computing"
          duration="10 Weeks"
          students="80+"
          certified
          onPress={() => onCoursePress('aws')}
        />
      </ScrollView>

      {/* Certifications */}
      <Text style={styles.sectionTitleFull}>Popular Certifications</Text>
      <View style={styles.certList}>
        <TouchableOpacity 
          style={styles.certItem} 
          onPress={() => onCoursePress('fullstack')}
          accessibilityLabel="Full Stack Web Dev"
        >
          <View style={styles.certIconBox}>
            <Ionicons name="code-slash" size={22} color={COLORS.white} />
          </View>
          <View style={styles.certContent}>
            <Text style={styles.certTitle}>Full Stack Web Development</Text>
            <Text style={styles.certDesc}>Frontend + Backend + Database</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.certItem} 
          onPress={() => onCoursePress('mobile')}
          accessibilityLabel="Mobile App Dev"
        >
          <View style={styles.certIconBox}>
            <Ionicons name="phone-portrait" size={22} color={COLORS.white} />
          </View>
          <View style={styles.certContent}>
            <Text style={styles.certTitle}>Mobile App Development</Text>
            <Text style={styles.certDesc}>iOS & Android Apps</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.certItem} 
          onPress={() => onCoursePress('devops')}
          accessibilityLabel="DevOps & CI/CD"
        >
          <View style={styles.certIconBox}>
            <Ionicons name="server" size={22} color={COLORS.white} />
          </View>
          <View style={styles.certContent}>
            <Text style={styles.certTitle}>DevOps & CI/CD</Text>
            <Text style={styles.certDesc}>Docker, Kubernetes, Jenkins</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.certItem} 
          onPress={() => onCoursePress('ai')}
          accessibilityLabel="AI & ML"
        >
          <View style={styles.certIconBox}>
            <Ionicons name="bulb" size={22} color={COLORS.white} />
          </View>
          <View style={styles.certContent}>
            <Text style={styles.certTitle}>AI & Machine Learning</Text>
            <Text style={styles.certDesc}>Python, TensorFlow, PyTorch</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
        </TouchableOpacity>
      </View>

      {/* CTA */}
      <TouchableOpacity 
        style={styles.ctaBtn} 
        onPress={() => onCoursePress('react')}
        accessibilityLabel="Enroll Now"
      >
        <Ionicons name="school" size={20} color={COLORS.white} />
        <Text style={styles.ctaText}>Enroll Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  content: {
    paddingTop: 60,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoIcon: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: COLORS.accentPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  logoSubtext: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  notifBtn: {
    padding: 8,
    position: 'relative',
  },
  notifDot: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.error,
  },
  hero: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    lineHeight: 36,
  },
  heroSubtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginTop: 8,
    lineHeight: 22,
  },
  chips: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 14,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: COLORS.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 13,
    color: COLORS.white,
    fontWeight: '500',
  },
  statsBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: COLORS.primaryPurple,
    marginHorizontal: 20,
    borderRadius: 16,
    paddingVertical: 18,
    marginBottom: 24,
  },
  statItem: {
    alignItems: 'center',
  },
  statNum: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  statDivider: {
    width: 1,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  sectionTitleFull: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  viewAll: {
    fontSize: 14,
    color: COLORS.accentPurple,
    fontWeight: '500',
  },
  coursesRow: {
    paddingLeft: 20,
    paddingRight: 8,
    marginBottom: 24,
  },
  certList: {
    backgroundColor: COLORS.primaryPurple,
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  certItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  certIconBox: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.accentPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  certContent: {
    flex: 1,
  },
  certTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.white,
  },
  certDesc: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  ctaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 10,
    borderRadius: 14,
    backgroundColor: COLORS.accentPurple,
    marginHorizontal: 20,
  },
  ctaText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.white,
  },
});
