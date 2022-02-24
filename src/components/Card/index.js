import React from "react";
import { View, Text } from 'react-native';
import { Children } from "react/cjs/react.production.min";

import Style from "./style";

const Card = ({title, children}) =>{
    return(
        <View style={Style.card_container}>
          <View style={Style.card}>
            <View style={Style.card_header}>
              <Text>{title}</Text>
            </View>
                <View style={Style.card_content}>
                    {children}
                </View>
          </View>
        </View>
    )
};

export default Card;