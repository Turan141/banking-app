import React, { useState, useRef, useEffect, useCallback } from "react";
import { Box } from "@mui/material";
import { REQ_ACCOUNT_STATS } from "../../managers/AccounHomeManager";
import { AccountStatItem } from "./AccountStatItem";

const AccountStats: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [accountStats] = REQ_ACCOUNT_STATS.useRequest();

  console.log({accountStats})

  const statsContainer = useRef<HTMLDivElement | null>(null);
  const statRef = useRef<Array<HTMLDivElement | null>>([]);
  const scrollTimerRef = useRef<number | null>(null);


  const handleTouchEnd = useCallback(() => {
    if (scrollTimerRef.current) {
      clearTimeout(scrollTimerRef.current);
    }

    scrollTimerRef.current = setTimeout(() => {
      const visibleDiv = statRef.current.find((el) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          return (
            rect.left >= 0 &&
            rect.right <= window.innerWidth &&
            rect.top >= 0 &&
            rect.bottom <= window.innerHeight
          );
        }
        return false;
      });

      const currentStatIndex = parseInt(visibleDiv?.id?.split("_")[1] || "0");
      setCurrentSlide(currentStatIndex);
    }, 500);
  }, []);

  useEffect(() => {
    if (statsContainer.current) {
      statsContainer.current.addEventListener("touchend", handleTouchEnd, { passive: true });
    }

    return () => {
      if (statsContainer.current) {
        statsContainer.current.removeEventListener("touchend", handleTouchEnd);
      }

      if (scrollTimerRef.current) {
        clearTimeout(scrollTimerRef.current);
      }
    };
  }, [handleTouchEnd]);

  return (
    <Box display="flex" flexDirection="column" position="relative">
      <Box
        sx={{
          "::-webkit-scrollbar": { display: "none" },
          display: "flex",
          scrollSnapType: "x mandatory",
          paddingLeft: "50%",
        }}
        overflow="scroll"
        alignItems="center"
        pt={2}
        pr={10}
        ref={statsContainer}
      >
        {accountStats?.map((stat: IStatObject, index: number) => (
          <div
            style={{ scrollSnapAlign: "center" }}
            key={index}
            ref={(el) => (statRef.current[index] = el)}
            id={`accountStat_${index}`}
          >
            <AccountStatItem
              title={stat.title}
              consolidateCurrency={stat.consolidateCurrency}
              consolidateTotal={stat.totalConsolidateAmount}
              active={currentSlide === index}
            />
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default AccountStats;
