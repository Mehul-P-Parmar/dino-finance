import React, { useEffect, useState } from 'react'
import { Card, CardBody, Heading, LinkExternal, Button, Flex } from '@dinofinance/uikit'
import styled from 'styled-components'
import useI18n from 'hooks/useI18n'
import usePagination from 'hooks/usePagination'


const StyledCakeStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const Table = styled('table')`
  width 100%;
  th, td {
    padding 0.5em 0.3em;
    text-align right;
    white-space nowrap;
    font-family monospace;
    font-weight bold;
  }
  th, td {
    &:first-child,&:nth-child(2)  {
      text-align left;
    }
  }
  .highlight {
    // background-color: ${({ theme }) => theme.colors.backgroundDisabled};
    color: ${({ theme }) => theme.colors.primary};
  }
  thead {
    tr {
      background-color: ${({ theme }) => theme.colors.background};
      border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};
      th {
      }
    }
  }
  tbody {
    tr {
      border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};
      td {
      }
    }
    tr:nth-child(2n){
      background-color: ${({ theme }) => theme.colors.background};
    }
  }
`

const workerTable = {
  "0xertre": "Worker1",
  "0xreter": "Worker2",
}

const BurnedStats = () => {
  const TranslateString = useI18n()
  const [burningData, setBurningData] = useState([])
  const [isLoadBurningData, setLoadBurningData] = useState(false)
  const {
    offset, perPage, nextPageEnable, prevPageEnable,
    jumpTo, nextPage, prevPage, setDocCount, setPerPage
  } = usePagination({ perPageDefault: 15 })
  const dateNow = Date.now()

  useEffect(() => {
    setLoadBurningData(true)
    fetch("https://api.ogeeswap.com/api/burning")
      .then(e => e.json())
      .then(e => setBurningData((e.result || []).reverse()))
      .finally(() => setLoadBurningData(false))
  }, []);

  useEffect(() => {
    setDocCount(burningData.length)
  }, [burningData, setDocCount])



  // console.log({
  //   offset, perPage, nextPageEnable, prevPageEnable,
  //   datas: burningData.slice(offset, perPage)
  // })


  return (
    <StyledCakeStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(100534, 'Burning Records')}
        </Heading>
        <Row>
          <Table>
            <thead>
              <tr>
                <th>From</th>
                <th>Block</th>
                {/* <th>Tx</th> */}
                <th>Amount</th>
                <th>Price</th>
                <th>Total</th>
                <th className="time">Date</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {
                burningData.slice(offset, offset + perPage).map(
                  (
                    { blockNumber, address, transactionHash, timestamps, amount, price, }) => <tr className={(dateNow - timestamps) < 24 * 3600000 ? 'highlight' : ''}>
                      <td>
                        <a href={`https://hecoinfo.com/address/${address}`} target="_blank" rel="noreferrer" >
                          {workerTable[address]
                            ? <>{workerTable[address]}</>
                            : <>{address.slice(0, 6)}..</>
                          }
                        </a>
                      </td>
                      <td>{blockNumber}</td>
                      {/* <td>{transactionHash.slice(0,6)}...</td> */}
                      <td>{amount.toFixed(2)}</td>
                      <td>${price.toFixed(2)}</td>
                      <td>${(price * amount).toFixed(2)}</td>
                      <td className="time">{new Date(timestamps).toLocaleDateString()}</td>
                      <td className="link1">
                        <LinkExternal color="primary" fontSize="10" small href={`https://hecoinfo.com/tx/${transactionHash}`} />
                      </td>
                    </tr>
                )
              }
            </tbody>
          </Table>

        </Row>
        <Row style={{ justifyContent: "flex-end" }}>
          <Button size="sm" variant="tertiary" margin="0.2em" onClick={prevPage} disabled={!prevPageEnable} >Prev</Button>
          <Button size="sm" variant="tertiary" margin="0.2em" onClick={nextPage} disabled={!nextPageEnable} >Next</Button>
        </Row>
      </CardBody>
    </StyledCakeStats>
  )
}

export default BurnedStats
