import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    paddingHorizontal: 16,
    paddingTop: 50,
  },

  /** ────────────── SEARCH BAR ────────────── **/
  searchGroup: {
    marginBottom: 20,
  },

  searchFormGroup: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  searchControlGroup: {
    flex: 1,
    flexDirection: "column",
  },

  searchFormText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#555",
  },

  searchControl: {
    marginTop: 4,
    fontSize: 14,
    color: "#333",
  },

  searchButton: {
    backgroundColor: "#000",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  /** ────────────── FILTERS ────────────── **/
  filterGroup: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },

  filterContainer: {
    backgroundColor: "white",
    height: 60,
    width: 80,
    borderRadius: 12,
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  /** ────────────── LISTINGS ────────────── **/
  listingContainer: {
    flex: 1,
    marginTop: 10,
  },

  /** ────────────── PAGINATION ────────────── **/
  paginationContainer: {
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  showMoreButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#000",
    borderRadius: 20,
  },

  showMoreButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "600",
  },
});
