import React, {ReactNode} from "react";
import Counter from '@/src/app/counter';
import Posts from '@/src/app/posts';

export default async function Home() {
    return <div>
        <Posts/>
    </div>
}