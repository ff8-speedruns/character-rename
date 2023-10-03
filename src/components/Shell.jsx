import Searchbar from './Searchbar';
import Siteheader from './Siteheader';
import Addresses from './Addresses';
import { AppShell, Header } from '@mantine/core';

export default function Shell() {

  return (
    <AppShell
      padding="md"
      header={<Header height={60} p="xs"><Siteheader /></Header>}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Addresses />
      <Searchbar />
    </AppShell>
  );
}