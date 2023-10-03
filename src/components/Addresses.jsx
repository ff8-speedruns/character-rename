import { Accordion, Text, Image } from '@mantine/core';

export default function Addresses() {
    return (
        <Accordion chevronPosition="left" variant="separated">
            <Accordion.Item value="howto">
                <Accordion.Control>How-To</Accordion.Control>
                <Accordion.Panel>
                    <Text fz="sm">Character names in the game are stored as an array of bytes.</Text>
                    <Text fz="sm">Add the addresses from the next section to Cheat Engine</Text>
                    <Text fz="sm">Configure as seen below. Array of Byte; hexadecimal; length: 9 (ignore the 7 in the pic).</Text>
                    <Image maw={320} mx="auto" radius="md" src="./example.png" alt="Random image" />
                </Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="addresses">
                <Accordion.Control>Cheat Engine Addresses</Accordion.Control>
                <Accordion.Panel>
                    <ul>
                        <li>Squall: FF8_EN.exe+18FDC70</li>
                        <li>Zell: FF8_EN.exe+18FA1AC</li>
                        <li>Irvine: FF8_EN.exe+18FA1B1</li>
                        <li>Quistis: FF8_EN.exe+18FA1B8</li>
                        <li>Selphie: FF8_EN.exe+18FA1C0</li>
                        <li>Rinoa: FF8_EN.exe+18FDC7C</li>
                        <li>Seifer (?): FF8_EN.exe+18FA1C8</li>
                        <li>Edea (?): FF8_EN.exe+18FA1CF</li>
                        <li>Angelo: FF8_EN.exe+18FDC88</li>
                        <li>Boko: FF8_EN.exe+18FDC94</li>
                        <li>Griever: FF8_EN.exe+18FE754</li>
                        <li>Quezacotl: FF8_EN.exe+18FDCA8</li>
                        <li>Ifrit: FF8_EN.exe+18FDD30</li>
                        <li>Shiva: FF8_EN.exe+18FDCEC</li>
                        <li>Siren: FF8_EN.exe+18FDD74</li>
                        <li>Brothers: FF8_EN.exe+18FDDB8</li>
                        <li>Diablos: FF8_EN.exe+18FDDFC</li>
                        <li>Carbuncle: FF8_EN.exe+18FDE40</li>
                        <li>Leviathan: FF8_EN.exe+18FDE84</li>
                        <li>Pandemona: FF8_EN.exe+18FDEC8</li>
                        <li>Cerberus: FF8_EN.exe+18FDF0C</li>
                        <li>Alexander: FF8_EN.exe+18FDF50</li>
                        <li>Doomtrain: FF8_EN.exe+18FDF94</li>
                        <li>Bahamut: FF8_EN.exe+18FDFD8</li>
                        <li>Cactaur: FF8_EN.exe+18FE01C</li>
                        <li>Tonberry: FF8_EN.exe+18FE060</li>
                        <li>Eden: FF8_EN.exe+18FE0A4</li>
                    </ul>
                </Accordion.Panel>
            </Accordion.Item>
        </Accordion>
    );
}