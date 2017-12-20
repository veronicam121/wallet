// Interface for the Blockchain Object of BlockCypher
// Info on https://www.blockcypher.com/dev/bitcoin/?javascript#blockchain

export interface IBlockchain {
    hash: string;
    time: number;
    block_index: number;
    height: number;
    txIndexes: number[];
}
