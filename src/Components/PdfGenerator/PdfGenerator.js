import React from "react";
import { Page, Text, Image,View, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,

  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  header: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
    fontWeight:900
  },
  details:{
    fontSize:12,
    lineHeight:2,
    paddingHorizontal: 20,
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PdfGenerator = () => {
  return (
    <Document style={styles.body}>
      <Page size="A7" >
        <Text style={styles.header}>Jom TaPAU</Text>
        <view style={styles.details}>
          <Text>Name: GM Shimon</Text>
          <Text>Address: KLG Block B</Text>
          <Text>Phone: +60187817582</Text>
          <Text>Food: Nasi Goreng Ayam</Text>
          <Text>Total: 6.5 rm</Text>
        </view>
      </Page>
    </Document>
  );
};

export default PdfGenerator;
