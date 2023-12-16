
import { NextResponse } from 'next/server';
import fs from 'fs'
import JSZip from 'jszip'
export async function GET(request: Request) {
    try {

        const folderPath = '../zip'; // Folder to zip
        const zipPath = './temp';
        const zip = new JSZip();
        zip.file("hello.txt", "Hello World")
        const content = await zip.generateAsync({ type: "nodebuffer" });
        fs.writeFileSync("temp/_sample.zip", content)
        // let cp = __dirname
        return NextResponse.json({ message: 'Here is block details by hash!', content }, { status: 200 });
    } catch (error: any) {
        const message = error.message || 'We ran into a problem Try again in a few minutes!';
        return NextResponse.json({ message, data: error }, { status: 500 });

    }
} 