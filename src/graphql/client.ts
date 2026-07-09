// src/graphql/client.ts
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "my_jwt";

// 1. Definisikan HTTP Link utama ke backend GraphQL Anda
const httpLink = createHttpLink({
  uri: "https://task-app-be-mern.vercel.app/graphql", // Sesuaikan dengan endpoint GraphQL Anda
});

// 2. Hubungkan Token Autentikasi secara dinamis ke setiap request
const authLink = setContext(async (_, { headers }) => {
  // Mengambil token langsung dari SecureStore secara asinkron
  const token = await SecureStore.getItemAsync(TOKEN_KEY);
  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

// 3. Buat instance Apollo Client tunggal (Singleton)
export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
