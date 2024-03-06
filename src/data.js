//importing crops images

import tomato from "./Images/tomato.jpg";
import potato from "./Images/potato.jpg";
import wheat from "./Images/wheat.jpg";
import corn from "./Images/corn.jpg";
import soybean from "./Images/Soybean.webp";
import rice from "./Images/rice.jpg";
import cotton from "./Images/cotton.jpg";
import sugarcane from "./Images/sugarcane.jpg";
import sunflower from "./Images/sunflower.jpg";
import apple from "./Images/apple.jpg";
import banana from "./Images/banana.webp"
import watermelon from "./Images/watermelon.jpg"
import grapes from "./Images/grapes.jpg"
import groundnuts from "./Images/groundnuts.jpg"
import jute from "./Images/jute.webp"
import kidneybeans from "./Images/kidneybeans.jpg"
import coffee from "./Images/coffee.jpg"
import peas from "./Images/peas.jpg"


export const cropData = [
  {
    id: 1,
    name: "Tomato",
    image: tomato,
    temperature: { min: '18', max: '30' },
    moisture: { min: '50', max: '80' },
    nutrients: { nitrogen: "Medium", phosphorus: "High", potassium: "Medium" },
    nitrogen_value_ppm: '500',
    phosphorus_value_ppm: '800',
    potassium_value_ppm: '500',
    description:
      "Tomato, a warm-season crop, thrives in temperatures between 18°C and 30°C and requires soil moisture levels ranging from 50% to 80%. Its moderate need for nitrogen, high requirement for phosphorus, and medium requirement for potassium make it important to provide balanced nutrient supplements for optimal growth.",
  },
  {
    id: 2,
    name: "Potato",
    image: potato,
    temperature: { min: '10', max: '25' },
    moisture: { min: '60', max: '80' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '800',
    description:
      "Potato, a cool-season crop, thrives in temperatures between 10°C and 25°C and prefers soil moisture levels between 60% and 80%. Its high requirement for nitrogen, medium requirement for phosphorus, and high requirement for potassium necessitate careful nutrient management for optimal yield.",
  },
  {
    id: 3,
    name: "Wheat",
    image: wheat,
    temperature: { min: '10', max: '25' },
    moisture: { min: '50', max: '70' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "Low" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '300',
    description:
      "Wheat, a cool-season cereal grain crop, thrives in temperatures between 10°C and 25°C and requires soil moisture levels between 50% and 70%. With its high requirement for nitrogen, medium requirement for phosphorus, and low requirement for potassium, wheat cultivation necessitates appropriate fertilization practices for optimal yield.",
  },
  {
    id: 4,
    name: "Corn",
    image: corn,
    temperature: { min: '20', max: '35' },
    moisture: { min: '60', max: '80' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '800',
    description:
      "Corn, also known as maize, is a warm-season crop that thrives in temperatures ranging from 20°C to 35°C. It requires soil moisture levels between 60% and 80% for optimal growth. Corn has a high requirement for nitrogen, medium requirement for phosphorus, and high requirement for potassium.",
  },
  {
    id: 5,
    name: "Rice",
    image: rice,
    temperature: { min: '20', max: '35' },
    moisture: { min: '70', max: '90' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '800',
    description:
      "Rice is a warm-season cereal grain crop that thrives in temperatures ranging from 20°C to 35°C. It requires high soil moisture levels between 70% and 90% for optimal growth. Rice has a high requirement for nitrogen, medium requirement for phosphorus, and high requirement for potassium.",
  },
  {
    id: 6,
    name: "Soybean",
    image: soybean,
    temperature: { min: '20', max: '30' },
    moisture: { min: '50', max: '80' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "Medium" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '500',
    description:
      "Soybean is a warm-season legume crop that thrives in temperatures ranging from 20°C to 30°C. It requires soil moisture levels between 50% and 80% for optimal growth. Soybeans have a high requirement for nitrogen, medium requirement for phosphorus, and medium requirement for potassium.",
  },

  {
    id: 7,
    name: "Cotton",
    image: cotton,
    temperature: { min: '20', max: '30' },
    moisture: { min: '60', max: '80' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "Medium" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '500',
    description:
      "Cotton, a warm-season crop, thrives in temperatures ranging from 20°C to 30°C and requires soil moisture levels between 60% and 80%. It has a high requirement for nitrogen, medium requirement for phosphorus, and medium requirement for potassium.",
  },
  {
    id: 8,
    name: "Sugarcane",
    image: sugarcane,
    temperature: { min: '20', max: '35' },
    moisture: { min: '70', max: '90' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '800',
    description:
      "Sugarcane is a tropical perennial grass crop that thrives in temperatures ranging from 20°C to 35°C. It requires high soil moisture levels between 70% and 90% for optimal growth. Sugarcane has a high requirement for nitrogen, medium requirement for phosphorus, and high requirement for potassium. It is cultivated for its high sugar content, which is extracted and processed into various sweeteners, including table sugar, molasses, and sugarcane syrup. Sugarcane cultivation plays a significant role in the global sugar industry and provides a source of income for millions of farmers worldwide.",
  },

  {
    id: 9,
    name: "Sunflower",
    image: sunflower,
    temperature: { min: '20', max: '30' },
    moisture: { min: '50', max: '80' },
    nutrients: { nitrogen: "Medium", phosphorus: "High", potassium: "Medium" },
    nitrogen_value_ppm: '500',
    phosphorus_value_ppm: '800',
    potassium_value_ppm: '500',
    description:
      "Sunflower, a warm-season annual crop, thrives in temperatures between 20°C and 30°C and requires soil moisture levels ranging from 50% to 80%. It has a moderate requirement for nitrogen, high requirement for phosphorus, and medium requirement for potassium. Sunflowers are cultivated for their oil-rich seeds, which are used for cooking oil, snacks, and bird feed. Additionally, sunflowers are valued for their ornamental beauty and are grown for decorative purposes. Sunflower cultivation contributes to agricultural diversity and provides economic opportunities for farmers.",
  },
  {
    id: 10,
    name: "Apple",
    image: apple,
    temperature: { min: '10', max: '30' },
    moisture: { min: '60', max: '80' },
    nutrients: { nitrogen: "Medium", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '600',
    phosphorus_value_ppm: '600',
    potassium_value_ppm: '800',
    description:
      "Apple trees are deciduous fruit trees that thrive in temperate climates with temperatures ranging from 10°C to 30°C and prefer soil moisture levels between 60% and 80%. They have a moderate requirement for nitrogen, medium requirement for phosphorus, and high requirement for potassium. Apples are one of the most widely cultivated fruit crops globally, valued for their sweet and crisp fruit. They are consumed fresh, processed into various products such as juices and sauces, and used in cooking and baking. Apple cultivation is an important component of horticulture, providing economic opportunities for growers and contributing to the agricultural economy.",
  },
  {
    id: 11,
    name: "Peas",
    image: peas,
    temperature: { min: '10', max: '25' },
    moisture: { min: '50', max: '70' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "Medium" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '500',
    description:
      "Peas are cool-season legumes that thrive in temperatures between 10°C and 25°C and require soil moisture levels between 50% and 70%. They have a high requirement for nitrogen, medium requirement for phosphorus, and medium requirement for potassium. Peas are valued for their edible pods and seeds, which are consumed fresh, frozen, or dried. They are a rich source of protein, fiber, and various vitamins and minerals.",
  },
  {
    id: 12,
    name: "Coffee",
    image: coffee,
    temperature: { min: '15', max: '24' },
    moisture: { min: '60', max: '80' },
    nutrients: { nitrogen: "High", phosphorus: "Low", potassium: "Medium" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '300',
    potassium_value_ppm: '500',
    description:
      "Coffee plants thrive in tropical climates with temperatures ranging from 15°C to 24°C and prefer soil moisture levels between 60% and 80%. They have a high requirement for nitrogen, low requirement for phosphorus, and medium requirement for potassium. Coffee beans, harvested from the plant's cherries, are roasted and ground to produce the beverage known as coffee. Coffee cultivation is an important global industry, providing livelihoods for millions of people and contributing to the economies of many countries.",
  },
  {
    id: 13,
    name: "Kidney Beans",
    image: kidneybeans,
    temperature: { min: '20', max: '30' },
    moisture: { min: '50', max: '70' },
    nutrients: { nitrogen: "Medium", phosphorus: "Medium", potassium: "Medium" },
    nitrogen_value_ppm: '600',
    phosphorus_value_ppm: '600',
    potassium_value_ppm: '600',
    description:
      "Kidney beans are warm-season legumes that thrive in temperatures between 20°C and 30°C and require soil moisture levels between 50% and 70%. They have moderate requirements for nitrogen, phosphorus, and potassium. Kidney beans are valued for their high protein and fiber content and are used in various cuisines worldwide, particularly in soups, stews, salads, and chili.",
  },
  {
    id: 14,
    name: "Jute",
    image: jute,
    temperature: { min: '25', max: '35' },
    moisture: { min: '60', max: '90' },
    nutrients: { nitrogen: "High", phosphorus: "Low", potassium: "Medium" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '300',
    potassium_value_ppm: '500',
    description:
      "Jute is a warm-season fiber crop that thrives in tropical climates with temperatures between 25°C and 35°C and requires high soil moisture levels between 60% and 90%. It has a high requirement for nitrogen, low requirement for phosphorus, and medium requirement for potassium. Jute fibers, extracted from the plant's stem, are used to make various products, including sacks, bags, ropes, textiles, and carpets. Jute cultivation is economically significant in many regions, particularly in India and Bangladesh.",
  },
  {
    id: 15,
    name: "Groundnuts",
    image: groundnuts,
    temperature: { min: '20', max: '30' },
    moisture: { min: '50', max: '70' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '800',
    description:
      "Groundnuts, also known as peanuts, are warm-season legumes that thrive in temperatures between 20°C and 30°C and require soil moisture levels between 50% and 70%. They have a high requirement for nitrogen, medium requirement for phosphorus, and high requirement for potassium. Groundnuts are valued for their edible seeds, which can be consumed roasted, boiled, or used to make peanut butter and oil. They are rich in protein, healthy fats, vitamins, and minerals.",
  },
  {
    id: 16,
    name: "Grapes",
    image: grapes,
    temperature: { min: '15', max: '35' },
    moisture: { min: '50', max: '70' },
    nutrients: { nitrogen: "Medium", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '600',
    phosphorus_value_ppm: '600',
    potassium_value_ppm: '800',
    description:
      "Grapes are deciduous woody vines that thrive in temperate to tropical climates with temperatures ranging from 15°C to 35°C and require soil moisture levels between 50% and 70%. They have moderate requirements for nitrogen and phosphorus but a high requirement for potassium. Grapes are primarily cultivated for their fruits, which are used fresh, dried (as raisins), or processed into various products such as juice, wine, and vinegar. Grape cultivation is a significant component of viticulture, contributing to the agricultural and beverage industries worldwide.",
  },
  {
    id: 17,
    name: "Watermelon",
    image: watermelon,
    temperature: { min: '20', max: '30' },
    moisture: { min: '70', max: '90' },
    nutrients: { nitrogen: "Medium", phosphorus: "Low", potassium: "High" },
    nitrogen_value_ppm: '500',
    phosphorus_value_ppm: '300',
    potassium_value_ppm: '800',
    description:
      "Watermelon is a warm-season fruit crop that thrives in temperatures between 20°C and 30°C and requires high soil moisture levels between 70% and 90%. It has moderate requirements for nitrogen and phosphorus but a high requirement for potassium. Watermelons are valued for their juicy, sweet flesh and are consumed fresh as a refreshing summer fruit. They are also used in salads, smoothies, and desserts.",
  },
  {
    id: 18,
    name: "Banana",
    image: banana,
    temperature: { min: '15', max: '35' },
    moisture: { min: '60', max: '90' },
    nutrients: { nitrogen: "High", phosphorus: "Medium", potassium: "High" },
    nitrogen_value_ppm: '800',
    phosphorus_value_ppm: '500',
    potassium_value_ppm: '800',
    description:
      "Banana plants thrive in tropical subtropical climates with temperatures ranging from 15°C to 35°C and require soil moisture levels between 60% and 90%. They have a high requirement for nitrogen, medium requirement for phosphorus, and high requirement for potassium. Bananas are one of the most popular fruits globally, valued for their sweet taste, convenience, and nutritional content. They are consumed fresh, cooked, or processed into various products such as banana chips, smoothies, and desserts. Banana cultivation is economically significant in many tropical regions, providing a source of income for millions of farmers and contributing to global food security.",
  },


];
