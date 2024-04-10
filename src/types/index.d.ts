declare namespace TestAppAPI {
  interface User {
    id: number;
    title: string;
  }
  interface TestAppState {
    users: User[];
  }

  interface User {
    id: number;
    name?: string;
    username: string;
    email?: string;
    address: Partial<Address>;
    phone?: string;
    website?: string;
    company: Partial<Company>;
    city?: string;
    isArchived?: boolean;
  }
  interface Address {
    street?: string;
    suite?: string;
    city: string;
    zipcode?: string;
    geo?: Geo;
  }

  interface Company {
    name: string;
    catchPhrase?: string;
    bs?: string;
  }

  export type AppDispatch = typeof store.dispatch;
  export type RootState = ReturnType<typeof store.getState>;
  export type Archive = User & { isArchive: boolean };
}
