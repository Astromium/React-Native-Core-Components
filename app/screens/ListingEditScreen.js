import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import Screen from "../components/Screen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1, iconName: 'floor-lamp', color: '#fc5c65' },
  { label: "Cars", value: 2, iconName: 'car', color: '#fd9644' },
  { label: "Cameras", value: 3, iconName: 'camera', color: '#fed330' },
  { label: "Games", value: 4, iconName: 'cards', color: '#26de81' },
  { label: "Clothing", value: 5, iconName: 'shoe-heel', color: '#2bcbba' },
  { label: "Sports", value: 6, iconName: 'basketball', color: '#45aaf2' },
  { label: "Movies & Music", value: 9, iconName: 'headphones', color: '#4b7bec' },
  { label: "Books", value: 10, iconName: 'book', color: '#fc5c65' },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
        />
        <Picker items={categories} name="category" placeholder="Category" />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
