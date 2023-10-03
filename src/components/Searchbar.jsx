import { Input, Group, Text } from '@mantine/core';
import { useState } from 'react';
import { IconNotes } from '@tabler/icons-react';
import data from '../data/data.json';

export default function Searchbar() {
    const [result, setResult] = useState("00 00 00 00 00 00 00");
    const maxLength = 9;
    const blank = { 'text': '', 'hex': "00" };

    function handleChange(event) {
        let input = event.target.value;
        let output = [];
        for (let i = 0; i < input.length; i++) {
            let outChar = data.find(el => el.text === input[i]) || blank;
            outChar = outChar.hex;
            output.push(outChar);
        }
        // Pad to our maxlength with 0's
        output = padEnd(output, maxLength, "00");
        setResult(output.join(" "));
    }

    function padEnd(array, minLength, fillValue = undefined) {
        return Object.assign(new Array(minLength).fill(fillValue), array);
    }

    return (
        <>
            <Group grow>
                <Input
                    icon={<IconNotes />}
                    placeholder="Enter Desired Name"
                    radius="xl"
                    size="lg"
                    onChange={handleChange}
                    maxLength={maxLength}
                />
            </Group>
            <Text fz="xl" align="center">Resulting Array of Bytes</Text>
            <Text fz="xl" align="center">{result}</Text>
        </>
    );
}