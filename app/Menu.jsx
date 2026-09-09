import { Link } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { colors } from "../constants/color";
import { useMenu } from "../constants/menu-context";

export default function About() {
  const { menuItems } = useMenu();

  return (
    <SafeAreaView style={styles.safeArea} edges={["bottom"]}>
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.eyebrow}>CURRENT MENU</Text>
        <View style={styles.titleRow}>
          <View>
            <Text style={styles.title}>Your dishes</Text>
            <Text style={styles.subtitle}>
              Everything ready for tonight's service.
            </Text>
          </View>
          <View style={styles.countBadge}>
            <Text style={styles.countNumber}>{menuItems.length}</Text>
            <Text style={styles.countLabel}>DISHES</Text>
          </View>
        </View>

        {menuItems.length === 0 ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyIcon}>+</Text>
            <Text style={styles.emptyTitle}>Your menu is waiting.</Text>
            <Text style={styles.emptyText}>
              Add a dish from the menu builder to see it here.
            </Text>
          </View>
        ) : (
          menuItems.map((item) => (
            <View style={styles.menuItem} key={item.id}>
              <View style={styles.menuItemTop}>
                <View style={styles.courseTag}>
                  <Text style={styles.courseTagText}>
                    {item.course.toUpperCase()}
                  </Text>
                </View>
                <Text style={styles.price}>${item.price}</Text>
              </View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          ))
        )}

        <Link href="/Home" asChild>
          <Pressable style={styles.addButton}>
            <Text style={styles.addButtonText}>+ Add another dish</Text>
          </Pressable>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: colors.background },
  content: { padding: 24, paddingBottom: 44 },
  eyebrow: {
    color: colors.primary,
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  titleRow: {
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  title: { color: colors.ink, fontSize: 32, fontWeight: "800" },
  subtitle: { color: colors.muted, fontSize: 15, lineHeight: 21, marginTop: 8 },
  countBadge: {
    alignItems: "center",
    backgroundColor: colors.ink,
    borderRadius: 34,
    height: 67,
    justifyContent: "center",
    width: 67,
  },
  countNumber: { color: colors.accent, fontSize: 23, fontWeight: "800" },
  countLabel: {
    color: colors.background,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  emptyState: {
    alignItems: "center",
    borderColor: colors.chipBorder,
    borderRadius: 16,
    borderStyle: "dashed",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 28,
  },
  emptyIcon: {
    backgroundColor: colors.accent,
    borderRadius: 22,
    color: colors.ink,
    fontSize: 27,
    height: 44,
    lineHeight: 40,
    marginBottom: 12,
    textAlign: "center",
    width: 44,
  },
  emptyTitle: { color: colors.ink, fontSize: 16, fontWeight: "800" },
  emptyText: {
    color: colors.subtle,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 6,
    textAlign: "center",
  },
  menuItem: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    marginBottom: 11,
    padding: 18,
  },
  menuItemTop: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseTag: {
    backgroundColor: colors.tagBackground,
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  courseTagText: {
    color: colors.primary,
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  price: { color: colors.primary, fontSize: 16, fontWeight: "800" },
  itemName: {
    color: colors.ink,
    fontSize: 18,
    fontWeight: "800",
    marginTop: 12,
  },
  itemDescription: {
    color: colors.muted,
    fontSize: 13,
    lineHeight: 19,
    marginTop: 5,
  },
  addButton: {
    alignItems: "center",
    backgroundColor: colors.ink,
    borderRadius: 11,
    marginTop: 13,
    paddingVertical: 15,
  },
  addButtonText: { color: colors.surface, fontSize: 15, fontWeight: "800" },
});
