import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

type ServiceItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  onPress: () => void;
};

export const ServiceItem = ({ icon, title, description, onPress }: ServiceItemProps) => (
  <TouchableOpacity 
    style={styles.item} 
    onPress={onPress}
    activeOpacity={0.7}
    accessibilityRole="button"
    accessibilityLabel={title}
  >
    <View style={styles.iconBox}>{icon}</View>
    <View style={styles.content}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color={COLORS.textSecondary} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
  description: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
});
