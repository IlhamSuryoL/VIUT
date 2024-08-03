import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import ViewBlack from "../components/ViewBlack";
import TextSmall from "../components/TextSmall";
import ButtomView from "../components/ButtomView";
import ChoosePoint from "../components/ChoosePoint";

const NPSQuestionScreen = ({ navigation, route }) => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const { productId, viatScore } = route.params;
  return (
    <ViewBlack accessible>
      <ChoosePoint
        renderHeader={() => (
          <TextSmall
            text="Dari skala 0 hingga 10, seberapa besar kemungkinan Anda akan merekomendasikan produk atau layanan kami kepada teman-teman Anda?"
            style={{ textAlign: "center", marginBottom: 30 }}
          />
        )}
        totalPoint={10}
        selectedPoint={selectedPoint}
        setSelectedPoint={(index) => setSelectedPoint(index)}
        renderFooter={() => (
          <View style={{ marginTop: 15 }}>
            <ButtomView
              navigation={navigation}
              onPressNextButton={() => {
                if (!selectedPoint) {
                  Alert.alert(
                    "",
                    "Sebelum melanjutkan silahkan berikan penilaian anda"
                  );
                  return;
                }
                navigation.navigate("NPSSurveyScreen", {
                  productId,
                  npsScore: selectedPoint,
                  viatScore,
                });
              }}
            />
          </View>
        )}
      />
    </ViewBlack>
  );
};

export default NPSQuestionScreen;
