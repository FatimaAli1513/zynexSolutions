import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

const { width } = Dimensions.get('window');

type CourseCardProps = {
  icon: React.ReactNode;
  title: string;
  duration: string;
  students: string;
  certified?: boolean;
  onPress: () => void;
};

export const CourseCard = ({ 
  icon, 
  title, 
  duration, 
  students, 
  certified = false, 
  onPress 
}: CourseCardProps) => (
  <TouchableOpacity 
    style={styles.card} 
    onPress={onPress}
    activeOpacity={0.8}
    accessibilityRole="button"
    accessibilityLabel={title}
  >
    <View style={styles.header}>
      <View style={styles.iconContainer}>{icon}</View>
      {certified && (
        <View style={styles.badge}>
          <MaterialIcons name="verified" size={14} color={COLORS.gold} />
          <Text style={styles.badgeText}>Certified</Text>
        </View>
      )}
    </View>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.stats}>
      <View style={styles.stat}>
        <Ionicons name="time-outline" size={14} color={COLORS.textSecondary} />
        <Text style={styles.statText}>{duration}</Text>
      </View>
      <View style={styles.stat}>
        <Ionicons name="people-outline" size={14} color={COLORS.textSecondary} />
        <Text style={styles.statText}>{students}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: width * 0.55,
    backgroundColor: COLORS.primaryPurple,
    borderRadius: 16,
    padding: 16,
    marginRight: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  iconContainer: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,215,0,0.15)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    color: COLORS.gold,
    fontWeight: '600',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 10,
  },
  stats: {
    flexDirection: 'row',
    gap: 16,
  },
  stat: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
});
