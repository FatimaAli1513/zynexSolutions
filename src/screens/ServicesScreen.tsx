import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';
import { ServiceItem } from '../components';

type ServicesScreenProps = {
  onServicePress: (serviceId: string) => void;
};

export const ServicesScreen = ({ onServicePress }: ServicesScreenProps) => {
  return (
    <ScrollView 
      style={styles.container}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.content}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>Technology solutions for your business</Text>
      </View>

      {/* Services List */}
      <View style={styles.servicesBox}>
        <ServiceItem
          icon={<Ionicons name="globe" size={24} color={COLORS.accentPurple} />}
          title="Web Development"
          description="Custom websites & web applications"
          onPress={() => onServicePress('web')}
        />
        <ServiceItem
          icon={<Ionicons name="phone-portrait" size={24} color={COLORS.accentPurple} />}
          title="Mobile App Development"
          description="iOS & Android native apps"
          onPress={() => onServicePress('mobile')}
        />
        <ServiceItem
          icon={<MaterialCommunityIcons name="cloud-outline" size={24} color={COLORS.accentPurple} />}
          title="Cloud Solutions"
          description="AWS, Azure & GCP services"
          onPress={() => onServicePress('cloud')}
        />
        <ServiceItem
          icon={<MaterialCommunityIcons name="cog-outline" size={24} color={COLORS.accentPurple} />}
          title="IT Consulting"
          description="Strategic technology guidance"
          onPress={() => onServicePress('consulting')}
        />
      </View>

      {/* Why Choose Us */}
      <Text style={styles.sectionTitle}>Why Choose Zynex?</Text>
      <View style={styles.whyUsRow}>
        <View style={styles.whyUsItem}>
          <View style={styles.whyUsIcon}>
            <MaterialIcons name="verified" size={24} color={COLORS.gold} />
          </View>
          <Text style={styles.whyUsTitle}>Industry Certified</Text>
          <Text style={styles.whyUsDesc}>Recognized certifications</Text>
        </View>
        <View style={styles.whyUsItem}>
          <View style={styles.whyUsIcon}>
            <Ionicons name="people" size={24} color={COLORS.success} />
          </View>
          <Text style={styles.whyUsTitle}>Expert Trainers</Text>
          <Text style={styles.whyUsDesc}>Industry professionals</Text>
        </View>
        <View style={styles.whyUsItem}>
          <View style={styles.whyUsIcon}>
            <Ionicons name="briefcase" size={24} color="#60a5fa" />
          </View>
          <Text style={styles.whyUsTitle}>Job Assistance</Text>
          <Text style={styles.whyUsDesc}>Career support</Text>
        </View>
      </View>

      {/* Contact CTA */}
      <TouchableOpacity 
        style={styles.ctaBtn} 
        onPress={() => onServicePress('consulting')}
        accessibilityLabel="Contact Us"
      >
        <Ionicons name="chatbubbles" size={20} color={COLORS.white} />
        <Text style={styles.ctaText}>Contact Us</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerTagline}>"Innovating Tomorrow, Today"</Text>
        
        <View style={styles.companyInfo}>
          <Text style={styles.companyName}>ZYNEX SOLUTIONS (PRIVATE) LIMITED</Text>
          <Text style={styles.addressText}>House 8, Street 37</Text>
          <Text style={styles.addressText}>Wassan Pura, Lahore</Text>
          <Text style={styles.addressText}>Pakistan</Text>
        </View>
      </View>
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
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  headerSubtitle: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginTop: 6,
  },
  servicesBox: {
    backgroundColor: COLORS.primaryPurple,
    marginHorizontal: 20,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  whyUsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 28,
  },
  whyUsItem: {
    alignItems: 'center',
    flex: 1,
  },
  whyUsIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: COLORS.primaryPurple,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  whyUsTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.white,
    textAlign: 'center',
  },
  whyUsDesc: {
    fontSize: 11,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 2,
  },
  ctaBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 10,
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 20,
    marginBottom: 32,
  },
  ctaText: {
    fontSize: 17,
    fontWeight: '600',
    color: COLORS.white,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerTagline: {
    fontSize: 15,
    color: COLORS.white,
    fontStyle: 'italic',
    marginBottom: 20,
  },
  companyInfo: {
    alignItems: 'center',
    backgroundColor: COLORS.primaryPurple,
    padding: 16,
    borderRadius: 12,
    width: '100%',
  },
  companyName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
    marginBottom: 8,
  },
  addressText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
