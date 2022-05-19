export default function shutdown(time: number = 10): Promise<void> {
    return new Promise((resolve, reject) => {
        let timer = () => {
            setTimeout(() => {
                console.log(`电脑将在${time}秒后关机`)
                if (time-- > 0) {
                    timer()
                } else {
                    console.log('关机')
                    // process.exit()
                    resolve();
                }
            }, 1000);
        }
        timer()
    })
}