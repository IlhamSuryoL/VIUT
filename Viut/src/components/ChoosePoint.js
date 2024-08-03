import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import RadioButton from "./RadioButton";
import TextPrimary from "./TextPrimary";
import TextSmall from "./TextSmall";

const ChoosePoint = ({ selectedPoint, setSelectedPoint, totalPoint, renderHeader, renderFooter }) => {
  return (
    <View>
      <FlatList
        data={Array.from({ length: totalPoint })}
        renderItem={({ index }) => {
          const point = index + 1;
          return (
            <Pressable
              key={point}
              style={{
                marginVertical: 10,
                marginHorizontal: 5,
                flexDirection: "row",
              }}
              onPress={() => setSelectedPoint(point)}
            >
              <TextPrimary
                text={point}
                style={{ marginTop: 8, marginRight: 8 }}
                accessibilityLabel={"Skor yang anda berikan adalah " + point}
                accessibilityHint={
                  "klik ditombol kanan bawah untuk proses selanjutnya"
                }
              />
              <RadioButton
                size={45}
                active={selectedPoint == point}
                onPress={() => setSelectedPoint(point)}
                accessibilityLabel={"Skor yang anda berikan adalah " + point}
                accessibilityHint={
                  "klik ditombol kanan bawah untuk proses selanjutnya"
                }
              />
            </Pressable>
          );
        }}
        ListHeaderComponent={() => <>
          {renderHeader && renderHeader()}
          <TextSmall text="Tidak setuju" />
        </>}
        ListFooterComponent={() => <>
          <TextSmall text="Setuju" />
          {renderFooter && renderFooter()}
        </>}
      />
    </View>
  );
};

export default ChoosePoint;
