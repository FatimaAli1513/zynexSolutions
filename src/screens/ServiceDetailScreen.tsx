import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants/colors';

type ServiceDetailScreenProps = {
  service: {
    id: string;
    title: string;
    description: string;
    features: string[];
    benefits: string[];
  };
  onBack: () => void;
};

const getIconForService = (id: string) => {
  switch (id) {
    case 'web':
      return <Ionicons name="globe" size={40} color={COLORS.white} />;
    case 'mobile':
      return <Ionicons name="phone-portrait" size={40} color={COLORS.white} />;
    case 'cloud':
      return <MaterialCommunityIcons name="cloud-outline" size={40} color={COLORS.white} />;
    case 'consulting':
      return <MaterialCommunityIcons name="cog-outline" size={40} color={COLORS.white} />;
    default:
      return <Ionicons name="briefcase" size={40} color={COLORS.white} />;
  }
};

export const ServiceDetailScreen = ({ service, onBack }: ServiceDetailScreenProps) => {
  const handleEmail = () => {
    Linking.openURL('mailto:Muhammadwaleed3307@gmail.com?subject=Inquiry about ' + service.title);
  };

  const handleCall = () => {
    Linking.openURL('tel:+923055600700');
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
        <Text style={styles.headerTitle}>Service Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Service Header */}
        <View style={styles.serviceHeader}>
          <View style={styles.iconContainer}>
            {getIconForService(service.id)}
          </View>
          <Text style={styles.serviceTitle}>{service.title}</Text>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.description}>{service.description}</Text>
        </View>

        {/* Features */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>What We Offer</Text>
          {service.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Ionicons name="checkmark" size={16} color={COLORS.white} />
              </View>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>

        {/* Benefits */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Benefits</Text>
          {service.benefits.map((benefit, index) => (
            <View key={index} style={styles.benefitItem}>
              <Ionicons name="star" size={18} color={COLORS.gold} />
              <Text style={styles.benefitText}>{benefit}</Text>
            </View>
          ))}
        </View>

        {/* Contact Info */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Get In Touch</Text>
          <View style={styles.contactBox}>
            <Text style={styles.companyName}>ZYNEX SOLUTIONS (PRIVATE) LIMITED</Text>
            <Text style={styles.addressText}>House 8, Street 37</Text>
            <Text style={styles.addressText}>Wassan Pura, Lahore, Pakistan</Text>
            <View style={styles.contactDivider} />
            <Text style={styles.contactInfo}>📧 Muhammadwaleed3307@gmail.com</Text>
            <Text style={styles.contactInfo}>📞 0305-5600700</Text>
          </View>
        </View>
      </ScrollView>

      {/* Contact Buttons */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.callBtn} 
          onPress={handleCall}
          accessibilityLabel="Call Us"
        >
          <Ionicons name="call" size={20} color={COLORS.white} />
          <Text style={styles.btnText}>Call Us</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.contactBtn} 
          onPress={handleEmail}
          accessibilityLabel="Email Us"
        >
          <Ionicons name="mail" size={20} color={COLORS.white} />
          <Text style={styles.btnText}>Email Us</Text>
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
  serviceHeader: {
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
  serviceTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    textAlign: 'center',
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
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  featureIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.success,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 15,
    color: COLORS.white,
    flex: 1,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  benefitText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    flex: 1,
  },
  contactBox: {
    backgroundColor: COLORS.primaryPurple,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
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
  contactDivider: {
    width: '80%',
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: 12,
  },
  contactInfo: {
    fontSize: 13,
    color: COLORS.white,
    textAlign: 'center',
    marginTop: 4,
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
    flexDirection: 'row',
    gap: 12,
  },
  callBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.success,
    paddingVertical: 16,
    borderRadius: 14,
  },
  contactBtn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: COLORS.accentPurple,
    paddingVertical: 16,
    borderRadius: 14,
  },
  btnText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.white,
  },
});
