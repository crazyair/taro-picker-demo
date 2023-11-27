import { Block, PickerView, PickerViewColumn, View } from "@tarojs/components";

const Demo = () => {
  return (
    <View>
      <View>
        <View>
          <View>
            <View>
              <View>
                <View>
                  <View>
                    <View>
                      <View>
                        <View>
                          <View>
                            <View>
                              <View>
                                <PickerView
                                  style={{ width: "100%", height: 300 }}
                                >
                                  <PickerViewColumn>
                                    <Block>年</Block>
                                  </PickerViewColumn>
                                </PickerView>
                              </View>
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Demo;
